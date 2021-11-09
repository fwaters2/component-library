/* eslint-disable react/jsx-props-no-spreading */
// Generated with util/create-component.js
import * as React from 'react';

import { PillProps } from './Pill.types';

import './Pill.scss';

export default function Pill(props: PillProps) {
  const { active = false, text, count, onClick, ...rest } = props;

  return (
    <button
      type="button"
      data-testid="Pill"
      className={`pill-button ${active ? 'pill-active' : 'pill-inactive'}`}
      onClick={onClick}
      {...rest}
    >
      <span data-testid="pill-text" className="pill-text">
        {text}
      </span>
      <span className="pill-number">{count}</span>
    </button>
  );
}
