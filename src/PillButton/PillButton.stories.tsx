// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import PillButtonComponent from './PillButton';
import results from '../../.jest-test-results.json';
import { PillButtonProps } from './PillButton.types';

export default {
  title: 'Component Library/Molecules/PillsGroup/Pill Button',
  decorators: [withTests({ results })],
  component: PillButtonComponent,
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

export const PillButton = ({ active, text, count }: PillButtonProps) => (
  <PillButtonComponent active={active} value="test" text={text} count={count} />
);
