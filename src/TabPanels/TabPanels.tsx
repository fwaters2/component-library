// Generated with util/create-component.js
import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { TabPanelsProps } from './TabPanels.types';
import './TabPanels.scss';

export default function TabPanels({
  activeTabIndex,
  children,
}: TabPanelsProps) {
  return (
    <SwitchTransition>
      <CSSTransition
        key={activeTabIndex}
        addEndListener={(node: HTMLElement, done: () => void) =>
          node.addEventListener('transitionend', done, false)
        }
        classNames="panel"
      >
        {children[activeTabIndex]}
      </CSSTransition>
    </SwitchTransition>
  );
}
