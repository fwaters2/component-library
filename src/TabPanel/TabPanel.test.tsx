// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import TabPanel from './TabPanel';

describe('TabPanel Component', () => {
  test('Renders TabPanel', () => {
    const { asFragment } = render(<TabPanel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
