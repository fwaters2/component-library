/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { TabPanelsProps } from './TabPanels.types';
import './TabPanels.scss';

export default function TabPanels(props: TabPanelsProps) {
  const { activeTabIndex, children } = props;
  return (
    <div style={{ ...props.style }}>
      <SwitchTransition>
        <CSSTransition
          key={activeTabIndex}
          addEndListener={(node: any, done: () => void) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames="panel"
        >
          {children[activeTabIndex]}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
