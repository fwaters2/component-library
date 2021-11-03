// Generated with util/create-component.js
import * as React from 'react';

import { PillsGroupProps } from './PillsGroup.types';

import './PillsGroup.scss';

export default function PillsGroup({ children }: PillsGroupProps) {
  return (
    <div data-testid="PillsGroup" className="pills-group-container">
      {children}
    </div>
  );
}
