import * as React from 'react';
import './TabPanel.scss';
import { TabPanelProps } from './TabPanel.types';

export default function TabPanel({ children }: TabPanelProps) {
  return (
    <div data-testid="TabPanel" className="tab-panel">
      {children}
    </div>
  );
}
