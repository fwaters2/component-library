// Generated with util/create-component.js
import React from "react";
import { default as TabComponent } from "./Tab";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "Component Library/Organisms/Tabbed Views/Tab",
  decorators: [withTests({ results })],
  component: TabComponent,
};

export const Tab = () => <TabComponent>Tab 1</TabComponent>;
