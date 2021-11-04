// Generated with util/create-component.js
import * as React from 'react';

import { TabProps } from './TabNavigation.types';

import './TabNavigation.scss';
import TabPanel from '../TabPanel/TabPanel';

export default function TabNavigation({
  tabs,
  height,
  children,
}: {
  tabs: string[];
  height?: number;
  children: any;
}) {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  return (
    <>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            active={activeTabIndex === index}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>

      <TabPanels height={height}>
        {children.map((panel, index) =>
          React.cloneElement(panel, { active: index === activeTabIndex }),
        )}
      </TabPanels>
      <div>Other content</div>
    </>
  );
}

const Tabs = ({ children }) => {
  const [sliderOffset, setSliderOffset] = React.useState(0);
  const [sliderWidth, setSliderWidth] = React.useState(0);

  const slider = (
    <div className="slider" style={{ left: sliderOffset, width: sliderWidth }}>
      <div className="down-arrow" />
    </div>
  );

  const handleSlider = (sliderWidth: number, sliderOffset: number) => {
    setSliderWidth(sliderWidth);
    setSliderOffset(sliderOffset);
  };

  return (
    <div data-testid="TabNavigation" className="tab-navigation-container">
      {children.map((child) =>
        React.cloneElement(child, {
          handleSlider,
        }),
      )}
      {slider}
    </div>
  );
};

const Tab = ({
  active = false,
  onClick,
  handleSlider = () => {},
  children,
}: TabProps) => {
  const [tabWidth, setTabWidth] = React.useState(0);
  const [tabOffset, setTabOffset] = React.useState(0);
  const ref = React.useRef<HTMLButtonElement>();

  React.useLayoutEffect(() => {
    const { clientWidth, offsetLeft } = ref.current;
    setTabWidth(clientWidth);
    setTabOffset(offsetLeft);
    if (active) {
      handleSlider(clientWidth, offsetLeft);
    }
  }, [active]);

  const handleClick = () => {
    handleSlider(tabWidth, tabOffset);
    onClick();
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      data-testid="Tab"
      className={`tab ${active ? 'active-tab' : ''}`}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ height, children }: any) => {
  const [panelHeight, setPanelHeight] = React.useState(height);

  const handlePanelHeight = (panelHeight: number) => {
    if (!height) {
      setPanelHeight(panelHeight);
    }
  };

  return (
    <div className="tab-panels" style={{ height: panelHeight }}>
      {children.map((child) =>
        React.cloneElement(child, {
          fixedHeight: height,
          handlePanelHeight,
        }),
      )}
    </div>
  );
};
