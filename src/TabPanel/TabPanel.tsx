import * as React from 'react';
import './TabPanel.scss';
import { TabPanelProps } from './TabPanel.types';

export default function TabPanel({
  fixedHeight,
  active = true,
  handlePanelHeight = () => {},
  children,
}: TabPanelProps) {
  const ref = React.useRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    if (ref.current) {
      const { clientHeight } = ref.current;
      if (active) {
        handlePanelHeight(clientHeight);
      }
    }
  }, [active]);
  const height: string = fixedHeight ? `${fixedHeight}px` : null;

  return (
    <div
      ref={ref}
      data-testid="TabPanel"
      style={{ height }}
      className={`tab-panel ${active ? 'fadeIn' : 'fadeOut'}`}
    >
      {children}
    </div>
  );
}
