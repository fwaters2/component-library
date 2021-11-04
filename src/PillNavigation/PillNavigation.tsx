// Generated with util/create-component.js
import React from 'react';
import { TabPanels } from '../TabNavigation/TabNavigation';
import Pill from '../Pill/Pill';

export default function PillNavigation({ pills, children }) {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  return (
    <div>
      <Pills
        pills={pills}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
      <TabPanels>
        {children.map((child, index) => {
          const props = {
            active: activeTabIndex === index,
          };
          if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
          } else {
            return child;
          }
        })}
      </TabPanels>
    </div>
  );
}

const Pills = ({ pills, activeTabIndex, setActiveTabIndex }) => (
  <div style={{ display: 'flex' }}>
    {pills.map((pill, index) => (
      <Pill
        active={activeTabIndex === index}
        text={pill.text}
        value={pill.value}
        count={pill.count}
        onClick={() => setActiveTabIndex(index)}
      />
    ))}
  </div>
);
