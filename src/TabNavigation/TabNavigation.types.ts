// Generated with util/create-component.js
export interface TabNavigationProps {
  children?: any;
}

export interface TabProps {
  active?: boolean;
  onClick?: () => void;
  handleSlider?: (tabWidth: number, tabOffset: number) => void;
  children: React.ReactChild;
}

export interface TabPanels {
  height?: number;
  children: React.ReactChild[];
}
