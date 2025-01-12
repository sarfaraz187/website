import Home from "@src/app/pages/Home";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock the child components
vi.mock("@src/app/pages/Home/Intro", () => ({
  default: () => <div data-testid="mock-intro">Intro Component</div>,
}));

vi.mock("@src/app/pages/Home/Bio", () => ({
  default: () => <div data-testid="mock-bio">Bio Component</div>,
}));

vi.mock("@src/app/pages/Home/Companies", () => ({
  default: () => <div data-testid="mock-companies">Companies Component</div>,
}));

describe("Home Component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("renders all child components", () => {
    render(<Home />);

    expect(screen.getByTestId("mock-intro")).toBeInTheDocument();
    expect(screen.getByTestId("mock-bio")).toBeInTheDocument();
    expect(screen.getByTestId("mock-companies")).toBeInTheDocument();
  });

  it("renders components in correct order", () => {
    render(<Home />);

    const elements = screen.getAllByTestId(/mock-/);

    expect(elements[0]).toHaveTextContent("Intro Component");
    expect(elements[1]).toHaveTextContent("Bio Component");
    expect(elements[2]).toHaveTextContent("Companies Component");
  });

  it("renders exactly three components", () => {
    render(<Home />);
    const elements = screen.getAllByTestId(/mock-/);
    expect(elements).toHaveLength(3);
  });
});
