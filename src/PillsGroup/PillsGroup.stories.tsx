// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import PillsGroupComponent from './PillsGroup';
import PillButton from '../PillButton/PillButton';
import results from '../../.jest-test-results.json';

export default {
  title: 'Component Library/Molecules/Pills Group',
  decorators: [withTests({ results })],
  component: PillsGroupComponent,
  subcomponent: PillButton,
};

export const PillsGroup = () => (
  <PillsGroupComponent>
    <PillButton active text="Postive" value="positive" count={11} />
    <PillButton text="Negative" value="negative" count={4} />
  </PillsGroupComponent>
);
