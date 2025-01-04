import Header from "@src/app/components/Header";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it, test } from "vitest";

const userList = {
  id: 1,
  name: "Micheal",
  email: "micheal@gmail.com",
};

describe("Header Component", () => {
  it.concurrent("renders the navigation menu links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test.concurrent("Contains correct user name", () => {
    expect(userList.name).toBe("Micheal");
    // expect(userList.email).toBe("Micheal");
  });

  test.todo("unimplemented test");

  test.each([
    { a: 1, b: 1, expected: 2 },
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 1, expected: 3 },
  ])("add($a, $b) -> $expected", ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
});
