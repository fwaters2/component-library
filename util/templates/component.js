module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
  import * as React from 'react';
  
  import { ${componentName}Props } from "./${componentName}.types";
  
  import "./${componentName}.scss";
  
  export default function ${componentName}({foo}: ${componentName}Props) {
      return (
        <div data-testid="${componentName}" className="foo-bar">{foo}</div>
      );
  }
  
  `,
  extension: `.tsx`,
});
