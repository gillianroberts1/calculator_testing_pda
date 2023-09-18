import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });
  it("Should be able to add 1 and 4 and return 5", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const buttonAdd = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("Should be able to subtract 4 from 7", () => {
    const button7 = container.getByTestId("number7");
    const button4 = container.getByTestId("number4");
    const buttonSubtract = container.getByTestId("operator-subtract");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("Should be able to multiply 3 by 5", () => {
    const button3 = container.getByTestId("number3");
    const button5 = container.getByTestId("number5");
    const buttonMultiply = container.getByTestId("operator-multiply");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("15");
  });

  it("Should be able to  divide 21 by 7", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const buttonDivide = container.getByTestId("operator-divide");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("Should be able to concatenate multiply inputs together", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual("217");
  });

  it("Should be able to handle multiply operator clicks", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const buttonAdd = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("10");
  });

  it("Should be able to clear the running total without affecting the calculation", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const buttonAdd = container.getByTestId("operator-add");
    const buttonClear = container.getByTestId("clear");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });
});
