// Generated with util/create-component.js
import React from "react";
import PillsGroup from "./PillsGroup";
import PillButton from "../PillButton/PillButton";
import results from "../../.jest-test-results.json";

import { withTests } from "@storybook/addon-jest";

export default {
  title: "PillsGroup",
  decorators: [withTests({ results })],
  component: PillsGroup,
};

export const Default = () => (
  <PillsGroup>
    <PillButton active={true} text="Postive" value="positive" count={11} />
    <PillButton text="Negative" value="negative" count={4} />
  </PillsGroup>
);
