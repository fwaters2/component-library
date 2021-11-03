// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';

import TabNavigationComponent from './TabNavigation';
import results from '../../.jest-test-results.json';

export default {
  title: 'Component Library/Organisms/Tab Navigation',
  decorators: [withTests({ results })],
  component: TabNavigationComponent,
  // argTypes: {
  //   activeTab: {
  //     name: 'Active Tab',
  //     control: {
  //       type: 'select',
  //       options: [
  //         { index: 0, value: 'Tab One' },
  //         { index: 1, value: 'Tab Two' },
  //       ],
  //     },
  //     defaultValue: { index: 0, value: 'Tab One' },
  //   },
  // },
};

export const TabNavigation = () => <TabNavigationComponent />;
