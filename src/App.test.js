import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("REACT TEST", () => {
  test("getBy text, role, placeholder", () => {
    render(<App />);

    const helloWorldElem = screen.getByText(/click me/i);
    const btn = screen.getByRole(/button/i);
    const input = screen.getByPlaceholderText(/value/i);

    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();

    screen.debug();
  });

  test("FindBy Async test", async () => {
    render(<App />);

    screen.debug();
    const dataText = await screen.findByText(/data/i);
    expect(dataText).toBeInTheDocument();

    expect(dataText).toHaveStyle({ color: "red" });

    screen.debug();
  });

  test("queryBy Toggle test", () => {
    render(<App />);

    screen.debug();
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    screen.debug();
  });

  test("INPUT EVENT", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");

    // fireEvent.input(input, {
    //   target: {
    //     value: "123123",
    //   },
    // });

    // userEvent huddi react eventlar kabiishalaydi
    userEvent.type(input, "123123");

    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
