// Generated with util/create-component.js
import React from "react";
import TabContent from "./TabContent";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "TabContent",
  decorators: [withTests({ results })],
  component: TabContent,
};

export const Default = () => (
  <TabContent active={true}>
    <div>
      <h1>Tab Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        ipsum velit, eu aliquam eros tincidunt eget. Donec euismod, nisi
        euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
        nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
        nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
        aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
        nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      </p>
    </div>
  </TabContent>
);
