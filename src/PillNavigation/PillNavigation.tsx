// Generated with util/create-component.js
import React from 'react';
import TabPanel from '../TabPanel/TabPanel';
import Pill from '../Pill/Pill';

export default function PillNavigation() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  return (
    <div>
      <Pills>
        <Pill
          active={activeTabIndex === 0}
          text="Positive"
          value="pill1"
          count={11}
          onClick={() => setActiveTabIndex(0)}
        />
        <Pill
          active={activeTabIndex === 1}
          text="Negative"
          value="pill2"
          count={22}
          onClick={() => setActiveTabIndex(1)}
        />
      </Pills>
      <div>
        <TabPanel active={activeTabIndex === 0}>
          <div>
            <h1>Positive Items</h1>
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
            <h1>Negative Items</h1>
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
    </div>
  );
}

const Pills = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;
