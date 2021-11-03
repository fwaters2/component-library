// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import TabContentComponent from './TabContent';
import results from '../../.jest-test-results.json';

export default {
  title: 'Component Library/Organisms/Tabbed Views/Tab Content',
  decorators: [withTests({ results })],
  component: TabContentComponent,
};

export const TabContent = () => (
  <TabContentComponent active>
    <div>
      <h1>Tab Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        ipsum velit, eu aliquam eros tincidunt eget. Donec euismod, nisi
        euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
        nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
        nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
        aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
        nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      </p>
    </div>
  </TabContentComponent>
);
