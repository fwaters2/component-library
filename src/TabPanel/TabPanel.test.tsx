// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import TabPanel from './TabPanel';

describe('TabPanel Component', () => {
  it('should render if active', () => {
    const renderComponent = () =>
      render(
        <TabPanel active>
          <div>Tab Content</div>
        </TabPanel>,
      );

    const { getByTestId } = renderComponent();

    const component = getByTestId('TabPanel');

    expect(component).toBeInTheDocument();
  });
  it('should not render if inactive', () => {
    const renderComponent = () =>
      render(
        <TabPanel active={false}>
          <div>Tab Panel</div>
        </TabPanel>,
      );

    const { queryByTestId } = renderComponent();

    const component = queryByTestId('TabContent');

    expect(component).not.toBeInTheDocument();
  });
});
