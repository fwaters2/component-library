// Generated with util/create-component.js
import * as React from 'react';

import { TabProps } from './TabNavigation.types';

import './TabNavigation.scss';
import TabPanel from '../TabPanel/TabPanel';

export default function TabNavigation() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  return (
    <>
      <div data-testid="TabNavigation" className="tab-navigation-container">
        <Tab active={activeTabIndex === 0} onClick={() => setActiveTabIndex(0)}>
          Details
        </Tab>
        <Tab active={activeTabIndex === 1} onClick={() => setActiveTabIndex(1)}>
          Intent Labels
        </Tab>
        <Tab active={activeTabIndex === 2} onClick={() => setActiveTabIndex(2)}>
          Labeling Guidelines
        </Tab>
      </div>
      <div>
        <TabPanel active={activeTabIndex === 0}>
          <div>
            <h1>Details</h1>
            <p>
              First page of content: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed euismod ipsum velit, eu aliquam eros
              tincidunt eget. Donec euismod, nisi euismod, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
              aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
              aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet,
            </p>
          </div>
        </TabPanel>
        <TabPanel active={activeTabIndex === 1}>
          <div>
            <h1>Intent Labels</h1>
            <p>
              Second page of content: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed euismod ipsum velit, eu aliquam eros
              tincidunt eget. Donec euismod, nisi euismod, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
              aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
              aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet,
            </p>
          </div>
        </TabPanel>
        <TabPanel active={activeTabIndex === 2}>
          <div>
            <h1>Labeling Guidelines</h1>
            <p>
              Second page of content: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed euismod ipsum velit, eu aliquam eros
              tincidunt eget. Donec euismod, nisi euismod, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
              aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
              aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
              nunc nisl aliquet, nunc nisl aliquet,
            </p>
          </div>
        </TabPanel>
      </div>
    </>
  );
}

export function Tab({ active = false, onClick, children }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid="Tab"
      className={`tab ${active ? 'active-tab' : ''}`}
      style={{ position: 'relative' }}
    >
      {children}
      {active && (
        <div
          style={{
            position: 'absolute',
            bottom: -7,
            left: 'calc(50% - 5px)',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #304ffe',
          }}
        />
      )}
    </button>
  );
}
