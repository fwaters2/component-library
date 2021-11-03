import * as React from 'react';
import './TabPanel.scss';
import { TabPanelProps } from './TabPanel.types';

export default function TabPanel({ active = true, children }: TabPanelProps) {
  return (
    <div data-testid="TabPanel" className={active ? 'fadeIn' : 'fadeOut'}>
      {children}
    </div>
  );
}
