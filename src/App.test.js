import { render, screen } from "@testing-library/react";

import App from "./App";

test("First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/);
  // expect is part of jest

  const title = screen.getByTitle("image from pixabay");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
test("Testing input filed", () => {
  render(<App />);
  const chekcInput = screen.getByRole("textbox");
  // testing place holder
  let checkPlaceHolder = screen.getByPlaceholderText("Enter Your Name");

  expect(checkPlaceHolder).toBeInTheDocument();
  expect(chekcInput).toBeInTheDocument();
  expect(chekcInput).toHaveAttribute("name", "username");
  expect(chekcInput).toHaveAttribute("id", "userId");
  expect(chekcInput).toHaveAttribute("type", "text");
  //  expect(chekcInput).toHaveAttribute("value","aditya")
  // this one will give error:" console.error You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
  // occurs when we try to provide static value
});
