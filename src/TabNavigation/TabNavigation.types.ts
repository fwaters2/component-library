export interface TabNavigationProps {
  tabs: string[];
  tabsStyle?: React.CSSProperties;
  panelContainerStyle?: React.CSSProperties;
  children?: any;
}
export interface TabPanelsProps {
  children: React.ReactNode;
}
export interface TabProps {
  active?: boolean;
  onClick?: () => void;
  handleSlider?: (tabWidth: number, tabOffset: number) => void;
  children: React.ReactChild;
}
