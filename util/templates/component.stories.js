module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
  import React from "react";
  import ${componentName} from "./${componentName}";
  import results from "../../.jest-test-results.json";

  import { withTests } from "@storybook/addon-jest";
  
  export default {
      title: "${componentName}",
      decorators: [withTests({ results })],
      component: ${componentName},
  };
  
  export const WithBar = () => <${componentName} foo="bar" />;

  `,
  extension: `.stories.tsx`,
});
