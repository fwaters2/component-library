// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Pill from './Pill';

describe('Pill Component', () => {
  it('should render text correctly', () => {
    const renderComponent = () =>
      render(<Pill text="Positive" value="positive" />);
    const { getByTestId } = renderComponent();

    const component = getByTestId('pill-text');

    expect(component).toHaveTextContent('Positive');
  });
});
