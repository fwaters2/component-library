// Generated with util/create-component.js
import * as React from 'react';

import { TabContentProps } from './TabContent.types';

import './TabContent.scss';

export default function TabContent({
  active = true,
  children,
}: TabContentProps) {
  if (!active) return <></>;
  return <div data-testid="TabContent">{children}</div>;
}
