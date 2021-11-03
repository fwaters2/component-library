// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import ButtonComponent from './Button';
import results from '../../.jest-test-results.json';
import { ButtonProps } from './Button.types';

export default {
  title: 'Component Library/Atoms/Button',
  decorators: [withTests({ results })],
  component: ButtonComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
    color: {
      name: 'Color',
      control: { type: 'color' },
    },
    disabled: {
      name: 'isDisabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      name: 'isLoading',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export const Button = ({ disabled, loading, variant, color }: ButtonProps) => (
  <ButtonComponent
    disabled={disabled}
    loading={loading}
    variant={variant}
    color={color}
  >
    <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
    <span>Mark as complete</span>
  </ButtonComponent>
);
