// Generated with util/create-component.js
import React from "react";
import Tab from "../Tab/Tab";
import TabNavigation from "./TabNavigation";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "TabNavigation",
  decorators: [withTests({ results })],
  component: TabNavigation,
};

export const Default = () => (
  <TabNavigation>
    <Tab active={true}>Details</Tab>
    <Tab>Intent Labels</Tab>
    <Tab>Labeling Guidelines</Tab>
  </TabNavigation>
);
