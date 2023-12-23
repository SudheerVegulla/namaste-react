import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Biryani (13)");

  fireEvent.click(accordionHeader);

  const itemCount = screen.getAllByTestId("foodItems");
  expect(itemCount.length).toBe(13);

  const addButtons = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  expect(
    screen.getByText("Cart is empty .Add items to cart")
  ).toBeInTheDocument();
});
