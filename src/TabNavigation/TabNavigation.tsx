// Generated with util/create-component.js
import * as React from 'react';

import {
  TabNavigationProps,
  TabPanelsProps,
  TabProps,
} from './TabNavigation.types';

import './TabNavigation.scss';
import { TabPanelProps } from 'TabPanel/TabPanel.types';

export default function TabNavigation({
  tabs,
  height,
  children,
}: TabNavigationProps) {
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

export const TabPanels = ({ height, children }: any) => {
  const [panelHeight, setPanelHeight] = React.useState(height);

  const handlePanelHeight = (panelHeight: number) => {
    if (!height) {
      setPanelHeight(panelHeight);
    }
  };

  return (
    <div className="tab-panels" style={{ height: panelHeight }}>
      {children.map((child) => {
        const props = {
          handlePanelHeight,
          fixedHeight: height,
        };
        if (React.isValidElement(child)) {
          return React.cloneElement(child, props);
        } else {
          return child;
        }
      })}
    </div>
  );
};
