import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with login component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const button = screen.getByRole("button", { name: "Login" });
  const button = screen.getByText("Login");
  expect(button).toBeInTheDocument();
});

it("should render header component with cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("should render header component with cart Item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on Clicking", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
