// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Tab from './Tab';

describe('Tab Component', () => {
  it('should have the active-tab class when passed the active property', () => {
    const renderComponent = () => render(<Tab active>Test</Tab>);
    const { getByTestId } = renderComponent();
    expect(getByTestId('Tab')).toHaveClass('active-tab');
  });
});
