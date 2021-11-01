// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Button Component", () => {
  let props: ButtonProps;
  describe("Solid Button", () => {
    it("should have the default class if no color prop is passed", () => {
      const renderComponent = () => render(<Button {...props} />);
      const { getByTestId } = renderComponent();
      const button = getByTestId("Button");
      expect(button).toHaveClass("button-default");
    });
    it("should have a configurable color", () => {
      props = {
        color: "green",
      };
      const renderComponent = () => render(<Button {...props} />);
      const { getByTestId } = renderComponent();
      const button = getByTestId("Button");
      expect(button).toHaveStyle("background-color: green");
    });
    it("should have the disabled class if the button is disabled", () => {
      props = {
        disabled: true,
      };
      const renderComponent = () => render(<Button {...props} />);
      const { getByTestId } = renderComponent();
      const button = getByTestId("Button");
      expect(button).toHaveClass("disabled");
    });
    it.todo(
      "should have the loading class if the button is loading"
      //, () => {
      // props = {
      //   loading: true,
      // };
      // const renderComponent = () => render(<Button {...props} />);
      // const { getByTestId } = renderComponent();
      // const button = getByTestId("Button").firstChild;
      // expect(button).toHaveClass("loading");
      //}
    );
    it.todo(
      "should have a fad out/fade in transition between the text and loading"
    );
  });
});
