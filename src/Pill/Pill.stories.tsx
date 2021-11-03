// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import PillComponent from './Pill';
import results from '../../.jest-test-results.json';
import { PillProps } from './Pill.types';

export default {
  title: 'Component Library/Molecules/Pill',
  decorators: [withTests({ results })],
  component: PillComponent,
  argTypes: {
    active: {
      name: 'isActive',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    text: {
      name: 'text',
      control: { type: 'text' },
      defaultValue: 'Positive',
    },
    count: {
      name: 'count',
      control: { type: 'number' },
      defaultValue: 24,
    },
  },
};

export const Pill = ({ active, text, count }: PillProps) => (
  <PillComponent active={active} value="test" text={text} count={count} />
);
