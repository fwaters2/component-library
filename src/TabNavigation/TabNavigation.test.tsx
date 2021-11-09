// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import TabNavigation from './TabNavigation';
import { TabNavigationProps } from './TabNavigation.types';
import TabPanel from '../TabPanel/TabPanel';

describe('TabNavigation Component', () => {
  it.todo('should take up 100% width of parent');
  it.todo('should have variable left padding');
  it('should render only one panel at a time', () => {
    const { getByText } = render(
      <TabNavigation tabs={['Tab 1', 'Tab 2']}>
        <TabPanel>
          <div>Panel 1</div>
        </TabPanel>
        <TabPanel>
          <div>Panel 2</div>
        </TabPanel>
      </TabNavigation>,
    );
    expect(getByText('Panel 1')).toBeInTheDocument();
    expect(getByText('Panel 2')).not.toBeInTheDocument();
  });
});
