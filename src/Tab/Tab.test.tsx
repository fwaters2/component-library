// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Tab from "./Tab";
import { TabProps } from "./Tab.types";

describe("Tab Component", () => {
  let props: TabProps;

  const renderComponent = () => render(<Tab {...props} />);

  it("should have the active-tab class when passed the active property", () => {
    props = {
      children: "Test",
      active: true,
    };
    const { getByTestId } = renderComponent();
    expect(getByTestId("Tab")).toHaveClass("active-tab");
  });
});
