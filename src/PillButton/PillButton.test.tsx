// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import PillButton from './PillButton';

describe('PillButton Component', () => {
  it('should render text correctly', () => {
    const renderComponent = () =>
      render(<PillButton text="Positive" value="positive" />);
    const { getByTestId } = renderComponent();

    const component = getByTestId('pill-text');

    expect(component).toHaveTextContent('Positive');
  });
});
