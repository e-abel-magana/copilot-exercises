// Generate unit test for Alert Component
// Path: bakery-inventory/src/component/Alert/Alert.test.js

import React from "react";
import { render, screen, act } from "@testing-library/react";
import Alert from "./Alert";

jest.useFakeTimers();

test("renders Alert component", () => {
  render(<Alert />);
  const alertElement = screen.getByRole("alert");
  expect(alertElement).toBeInTheDocument();
});

// cover the clear prop
test("renders Alert component with clear prop", () => {
  render(<Alert clear={true} />);
  const alertElement = screen.getByRole("alert");
  expect(alertElement).toBeInTheDocument();
});

// cover the message prop
test("calls setOpen after timeout", () => {
  const setOpen = jest.fn();
  render(<Alert setOpen={setOpen} />);

  act(() => {
    jest.advanceTimersByTime(2000); // Replace 1000 with the timeout delay
  });
});

// cover the message prop with clear prop as false
test("calls setOpen after timeout", () => {
  const setOpen = jest.fn();
  render(<Alert setOpen={setOpen} clear={false} />);

  act(() => {
    jest.advanceTimersByTime(2000); // Replace 1000 with the timeout delay
  });
});
