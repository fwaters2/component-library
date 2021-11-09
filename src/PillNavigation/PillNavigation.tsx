// Generated with util/create-component.js
import React from 'react';
import TabPanels from '../TabPanels/TabPanels';
import Pill from '../Pill/Pill';

export default function PillNavigation(props) {
  const { pills, panelContainerStyle, children } = props;
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  return (
    <div>
      <Pills
        pills={pills}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
      <TabPanels
        style={{ ...panelContainerStyle }}
        activeTabIndex={activeTabIndex}
      >
        {children}
      </TabPanels>
    </div>
  );
}

const Pills = ({ pills, activeTabIndex, setActiveTabIndex }) => (
  <div style={{ display: 'flex' }}>
    {pills.map(({ text, value, count }, index) => {
      const leftMargin = index !== 0 ? '0.5rem' : '0';
      return (
        <Pill
          active={activeTabIndex === index}
          text={text}
          value={value}
          count={count}
          onClick={() => setActiveTabIndex(index)}
          style={{ marginLeft: leftMargin }}
        />
      );
    })}
  </div>
);
