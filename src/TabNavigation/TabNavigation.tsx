// Generated with util/create-component.js
import * as React from 'react';

import { TabNavigationProps } from './TabNavigation.types';

import './TabNavigation.scss';

export default function TabNavigation({ children }: TabNavigationProps) {
  return (
    <div data-testid="TabNavigation" className="tab-navigation-container">
      {children}
    </div>
  );
}
