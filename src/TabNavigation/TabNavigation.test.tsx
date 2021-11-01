// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TabNavigation from "./TabNavigation";
import { TabNavigationProps } from "./TabNavigation.types";

describe("TabNavigation Component", () => {
  let props: TabNavigationProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<TabNavigation {...props} />);

  it.todo(
    "should take up 100% width of parent"
    // , () => {
    //   props.foo = "bitflux was here";
    //   const { getByTestId } = renderComponent();

    //   const component = getByTestId("TabSliderGroup");

    //   expect(component).toHaveTextContent("bitflux was here");
    // }
  );
  it.todo("should have variable left padding");
});
