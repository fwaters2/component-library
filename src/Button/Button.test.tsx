// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  describe('Solid Button', () => {
    it('should have the default class if no color prop is passed', () => {
      const renderComponent = () => render(<Button />);
      const { getByTestId } = renderComponent();
      const button = getByTestId('Button');
      expect(button).toHaveClass('button-default');
    });
    it('should have a configurable color', () => {
      const renderComponent = () => render(<Button color="green" />);
      const { getByTestId } = renderComponent();
      const button = getByTestId('Button');
      expect(button).toHaveStyle('background-color: green');
    });
    it('should have the disabled class if the button is disabled', () => {
      const renderComponent = () => render(<Button disabled />);
      const { getByTestId } = renderComponent();
      const button = getByTestId('Button');
      expect(button).toHaveClass('disabled');
    });
  });
});
