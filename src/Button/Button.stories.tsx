// Generated with util/create-component.js
import React from "react";
import { default as ButtonComponent } from "./Button";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "Component Library/Atoms/Button",
  decorators: [withTests({ results })],
  component: ButtonComponent,
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

export const Button = ({ data, ...args }) => (
  <ButtonComponent {...args}>Mark as complete</ButtonComponent>
);
