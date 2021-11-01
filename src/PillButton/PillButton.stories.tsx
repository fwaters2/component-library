// Generated with util/create-component.js
import React from "react";
import PillButton from "./PillButton";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "PillButton",
  decorators: [withTests({ results })],
  component: PillButton,
  argTypes: {
    active: {
      name: "isActive",
      control: { type: "boolean", default: false },
    },
    text: {
      name: "text",
      control: { type: "text", default: "Positive" },
    },
    count: {
      name: "count",
      control: { type: "number", default: 7 },
    },
  },
};

export const Dynamic = ({ data, ...args }) => (
  <PillButton value="test" text="Positive" count={11} {...args} />
);
