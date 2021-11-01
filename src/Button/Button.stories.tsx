// Generated with util/create-component.js
import React from "react";
import Button from "./Button";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "Button",
  decorators: [withTests({ results })],
  component: Button,
  argTypes: {
    variant: {
      name: "Variant",
      control: {
        type: "select",
        options: ["solid", "outline"],
      },
    },
    color: {
      name: "Color",
      control: { type: "color" },
    },
    disabled: {
      name: "isDisabled",
      control: { type: "boolean", default: false },
    },
    loading: {
      name: "isLoading",
      control: { type: "boolean", default: false },
    },
  },
};

export const Dynamic = ({ data, ...args }) => (
  <Button {...args}>Mark as complete</Button>
);
