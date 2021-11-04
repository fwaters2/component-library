// Generated with util/create-component.js
import * as React from 'react';

import { TabProps } from './TabNavigation.types';

import './TabNavigation.scss';
import TabPanel from '../TabPanel/TabPanel';

export default function TabNavigation() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  return (
    <>
      <Tabs>
        <Tab
          active={activeTabIndex === 0}
          onClick={() => {
            setActiveTabIndex(0);
          }}
        >
          Details
        </Tab>
        <Tab
          active={activeTabIndex === 1}
          onClick={() => {
            setActiveTabIndex(1);
          }}
        >
          Intent Labels
        </Tab>
        <Tab
          active={activeTabIndex === 2}
          onClick={() => {
            setActiveTabIndex(2);
          }}
        >
          Labeling Guidelines
        </Tab>
      </Tabs>

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
