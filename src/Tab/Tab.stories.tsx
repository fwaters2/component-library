// Generated with util/create-component.js
import React from "react";
import Tab from "./Tab";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "Tab",
  decorators: [withTests({ results })],
  component: Tab,
};

export const Default = () => <Tab>Tab 1</Tab>;
