// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import PillsGroup from "./PillsGroup";
import { PillsGroupProps } from "./PillsGroup.types";

describe("PillsGroup Component", () => {
  let props: PillsGroupProps;

  const renderComponent = () => render(<PillsGroup {...props} />);

  it.todo(
    "should have an onChange method that sets activeTab"
    // , () => {
    //   props.foo = "bitflux was here";
    //   const { getByTestId } = renderComponent();

    //   const component = getByTestId("PillsGroup");

    //   expect(component).toHaveTextContent("bitflux was here");
    // }
  );
});
