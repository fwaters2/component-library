// Generated with util/create-component.js
import React from "react";
import Tab from "../Tab/Tab";
import { default as TabNavigationComponent } from "./TabNavigation";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "Component Library/Organisms/Tabbed Views/Tab Navigation",
  decorators: [withTests({ results })],
  component: TabNavigationComponent,
};

export const TabNavigation = () => (
  <TabNavigationComponent>
    <Tab active={true}>Details</Tab>
    <Tab>Intent Labels</Tab>
    <Tab>Labeling Guidelines</Tab>
  </TabNavigationComponent>
);
