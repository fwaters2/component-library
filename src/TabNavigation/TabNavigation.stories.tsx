// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';

import TabNavigationComponent from './TabNavigation';
import results from '../../.jest-test-results.json';
import TabPanel from '../TabPanel/TabPanel';

const TabOne = () => (
  <div>
    <h1>Details</h1>
    <p>
      First page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
    </p>
  </div>
);
const TabTwo = () => (
  <div>
    <h1>Intent Labels</h1>
    <p>
      Second page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet,
    </p>
  </div>
);

const TabThree = () => (
  <div>
    <h1>Labeling Guidelines</h1>
    <p>
      Second page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, Second
      page of content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec euismod,
      nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
    </p>
  </div>
);

export default {
  title: 'Component Library/Organisms/Tab Navigation',
  decorators: [withTests({ results })],
  component: TabNavigationComponent,
  argTypes: {
    height: {
      name: 'Set a fixed height',
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
  },
};

export const TabNavigation = ({ ...args }) => (
  <>
    <TabNavigationComponent
      tabs={['Details', 'Intent Labels', 'Labeling Guidelines']}
      height={args.height}
    >
      <TabPanel>
        <TabOne />
      </TabPanel>
      <TabPanel>
        <TabTwo />
      </TabPanel>
      <TabPanel>
        <TabThree />
      </TabPanel>
    </TabNavigationComponent>
    <div>Other content</div>
  </>
);
