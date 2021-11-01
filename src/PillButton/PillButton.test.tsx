// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PillButton from "./PillButton";
import { PillButtonProps } from "./PillButton.types";

describe("PillButton Component", () => {
  let props: PillButtonProps;

  const renderComponent = () => render(<PillButton {...props} />);

  it("should render text correctly", () => {
    let props: PillButtonProps;
    props = {
      text: "Positive",
      value: "positive",
    };
    const renderComponent = () => render(<PillButton {...props} />);
    const { getByTestId } = renderComponent();

    const component = getByTestId("pill-text");

    expect(component).toHaveTextContent("Positive");
  });
});
