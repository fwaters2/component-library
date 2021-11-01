// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TabContent from "./TabContent";
import { TabContentProps } from "./TabContent.types";

describe("TabContent Component", () => {
  it("should render if active", () => {
    let props: TabContentProps;
    const renderComponent = () =>
      render(
        <TabContent active={true}>
          <div>Tab Content</div>
        </TabContent>
      );

    const { getByTestId } = renderComponent();

    const component = getByTestId("TabContent");

    expect(component).toBeInTheDocument();
  });
  it("should not render if inactive", () => {
    let props: TabContentProps;

    const renderComponent = () =>
      render(
        <TabContent active={false}>
          <div>Tab Content</div>
        </TabContent>
      );

    const { queryByTestId } = renderComponent();

    const component = queryByTestId("TabContent");

    expect(component).not.toBeInTheDocument();
  });
});
