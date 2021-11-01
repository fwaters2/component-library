// Generated with util/create-component.js
import { withTests } from "@storybook/addon-jest";
import React from "react";
import results from "../../.jest-test-results.json";
import TabContent from "../TabContent/TabContent";
import ContentTransitionWrapper from "./ContentTransitionWrapper";

export default {
  title: "ContentTransitionWrapper",
  decorators: [withTests({ results })],
  component: ContentTransitionWrapper,
  argTypes: {
    activeTab: {
      name: "Active Tab",
      description: "The active tab",
      defaultValue: "Tab One",
      control: {
        type: "select",
        options: ["Tab One", "Tab Two"],
      },
    },
  },
};

export const Default = ({ data, ...args }) => (
  <ContentTransitionWrapper>
    <TabContent active={args.activeTab === "Tab One"}>
      <div>
        <h1>Tab One</h1>
        <p>
          First page of content: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed euismod ipsum velit, eu aliquam eros tincidunt
          eget. Donec euismod, nisi euismod, nunc nisl aliquet, nunc nisl
          aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
          nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
          nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
          aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
          nisl aliquet,
        </p>
      </div>
    </TabContent>
    <TabContent active={args.activeTab === "Tab Two"}>
      <div>
        <h1>Tab Two</h1>
        <p>
          Second page of content: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed euismod ipsum velit, eu aliquam eros tincidunt
          eget. Donec euismod, nisi euismod, nunc nisl aliquet, nunc nisl
          aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
          nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
          nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
          aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
          nisl aliquet,
        </p>
      </div>
    </TabContent>
  </ContentTransitionWrapper>
);
