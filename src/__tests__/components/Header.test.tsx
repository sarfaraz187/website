import Header from "@src/app/components/Header";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, it } from "vitest";

describe("Header Component", () => {
  it("renders the navigation menu links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
