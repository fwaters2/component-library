// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ContentTransitionWrapper from "./ContentTransitionWrapper";
import { ContentTransitionWrapperProps } from "./ContentTransitionWrapper.types";

describe("ContentTransitionWrapper Component", () => {
  let props: ContentTransitionWrapperProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<ContentTransitionWrapper {...props} />);

  it.todo(
    "should facilitate a fade out/in transition between children when pill component is used as tab navigation"

    // Note:
    // Create a wrapper component that will facilitate a fade out/in animation for showing different contents (children) when the “Pill” component is used as tabs navigation.

    // // Something like this
    // <PillsGroup onChange={// set activeTab}>
    //    <PillButton text=“Positive” value=“positive”… />
    //    <PillButton text=“Negative” value=“negative”… />
    // <PillsGroup/>

    // <ContentTransitionWrapper>
    //    <Tab1Content visible={activeTab === ‘positive’}/>
    //    <Tab2Content visible={activeTab === ‘negative’}/>
    // </ContentTransitionWrapper>

    // , () => {
    //   props.foo = "bitflux was here";
    //   const { getByTestId } = renderComponent();

    //   const component = getByTestId("ContentTransitionWrapper");

    //   expect(component).toHaveTextContent("bitflux was here");
    // }
  );
});
