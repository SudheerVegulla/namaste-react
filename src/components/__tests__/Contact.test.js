import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page tesst cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load submit inside contact us component", () => {
    render(<Contact />);

    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();
  });

  test("should load input name inside contact us component", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("Name");

    expect(name).toBeInTheDocument();
  });

  test("should load two input components inside contact us component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
