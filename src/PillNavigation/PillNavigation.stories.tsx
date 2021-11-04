import React from 'react';
import TabPanel from '../TabPanel/TabPanel';
import PillNavigationComponent from './PillNavigation';

export default {
  title: 'Component Library/Organisms/Pill Navigation',
  component: PillNavigationComponent,
};
const POSITIVE_PANEL = () => (
  <div>
    <h1>Positive Items</h1>
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
const NEGATIVE_PANEL = () => (
  <div>
    <h1>Negative Items</h1>
    <p>
      Second page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
    </p>
  </div>
);

export const PillNavigation = () => (
  <PillNavigationComponent
    pills={[
      { text: 'Postive', count: 11 },
      { text: 'Negative', count: 15 },
    ]}
  >
    <TabPanel>
      <POSITIVE_PANEL />
    </TabPanel>
    <TabPanel>
      <NEGATIVE_PANEL />
    </TabPanel>
  </PillNavigationComponent>
);
