// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import TabComponent from './Tab';
import results from '../../.jest-test-results.json';

export default {
  title: 'Component Library/Organisms/Tabbed Views/Tab',
  decorators: [withTests({ results })],
  component: TabComponent,
};

export const Tab = () => <TabComponent>Tab 1</TabComponent>;
