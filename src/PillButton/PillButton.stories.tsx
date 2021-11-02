// Generated with util/create-component.js
import React from "react";
import { default as PillButtonComponent } from "./PillButton";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "Component Library/Molecules/PillsGroup/Pill Button",
  decorators: [withTests({ results })],
  component: PillButtonComponent,
  argTypes: {
    active: {
      name: "isActive",
      control: { type: "boolean" },
      defaultValue: false,
    },
    text: {
      name: "text",
      control: { type: "text" },
      defaultValue: "Positive",
    },
    count: {
      name: "count",
      control: { type: "number" },
      defaultValue: 24,
    },
  },
};

export const PillButton = ({ data, ...args }) => (
  <PillButtonComponent value="test" text={args.text} {...args} />
);
