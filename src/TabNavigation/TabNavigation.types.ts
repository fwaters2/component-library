import { TabPanelProps } from 'TabPanel/TabPanel.types';

// Generated with util/create-component.js
export interface TabNavigationProps {
  tabs: string[];
  height?: number;
  children: TabPanelProps[];
}

export interface TabPanelsProps {
  height?: number;
  children: React.ReactNode;
}
export interface TabProps {
  active?: boolean;
  onClick?: () => void;
  handleSlider?: (tabWidth: number, tabOffset: number) => void;
  children: React.ReactChild;
}
