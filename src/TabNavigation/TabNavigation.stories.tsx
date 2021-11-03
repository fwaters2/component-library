// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import Tab from '../Tab/Tab';
import TabNavigationComponent from './TabNavigation';
import results from '../../.jest-test-results.json';

export default {
  title: 'Component Library/Organisms/Tabbed Views/Tab Navigation',
  decorators: [withTests({ results })],
  component: TabNavigationComponent,
};

export const TabNavigation = () => (
  <TabNavigationComponent>
    <Tab active>Details</Tab>
    <Tab>Intent Labels</Tab>
    <Tab>Labeling Guidelines</Tab>
  </TabNavigationComponent>
);
