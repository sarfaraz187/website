import Companies from "@src/app/pages/Home/Companies";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock the useIntl hook
vi.mock("@src/hooks/useIntl", () => ({
  default: () => (key: string) =>
    key === "home.companies" ? "My Companies" : key,
}));

describe("Companies Component", () => {
  it("renders without crashing", () => {
    render(<Companies />);
  });

  it("renders the correct heading", () => {
    render(<Companies />);
    expect(screen.getByRole("heading")).toHaveTextContent("My Companies");
  });

  it("renders all company logos", () => {
    render(<Companies />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);

    // Check if each company logo is present
    expect(screen.getByAltText("SevenCs")).toBeInTheDocument();
    expect(screen.getByAltText("Onestoptransformation")).toBeInTheDocument();
    expect(screen.getByAltText("Learnship")).toBeInTheDocument();
    expect(screen.getByAltText("Mako")).toBeInTheDocument();
  });

  it("has correct source paths for images", () => {
    render(<Companies />);

    const sevenCs = screen.getByAltText("SevenCs") as HTMLImageElement;
    const ost = screen.getByAltText(
      "Onestoptransformation"
    ) as HTMLImageElement;
    const learnship = screen.getByAltText("Learnship") as HTMLImageElement;
    const mako = screen.getByAltText("Mako") as HTMLImageElement;

    expect(sevenCs.src).toContain("/logo/sevencs.jpeg");
    expect(ost.src).toContain("/logo/ost.png");
    expect(learnship.src).toContain("/logo/learnship.png");
    expect(mako.src).toContain("/logo/mako.png");
  });

  it("applies correct responsive classes", () => {
    render(<Companies />);

    const container = screen.getByRole("companies");
    const gridContainer = container.children[1]; // The div with grid classes

    expect(gridContainer).toHaveClass("grid");
    expect(gridContainer).toHaveClass("sm:grid-cols-1");
    expect(gridContainer).toHaveClass("md:grid-cols-2");
    expect(gridContainer).toHaveClass("lg:grid-cols-4");
  });

  it("applies margin bottom correctly to images except the last one", () => {
    render(<Companies />);

    const images = screen.getAllByRole("img");

    // First three images should have margin bottom
    images.slice(0, 3).forEach((img) => {
      expect(img).toHaveClass("mb-6");
      expect(img).toHaveClass("lg:mb-0");
    });

    // Last image should not have margin bottom
    expect(images[3]).not.toHaveClass("mb-6");
    expect(images[3]).not.toHaveClass("lg:mb-0");
  });
});
