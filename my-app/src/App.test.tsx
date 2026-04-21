import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("shows login form on start", () => {
  render(
    <Provider store={store}>
      <App />?
    </Provider>
  );
  expect(screen.getByText("Please Login")).toBeInTheDocument();
});

test("login button shows on start", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText("Login")).toBeInTheDocument();});
