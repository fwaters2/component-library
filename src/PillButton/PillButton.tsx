// Generated with util/create-component.js
import * as React from 'react';

import { PillButtonProps } from './PillButton.types';

import './PillButton.scss';

export default function PillButton({
  active = false,
  text,
  value,
  count,
  children,
}: PillButtonProps) {
  return (
    <button
      type="button"
      data-testid="PillButton"
      className={`pill-button ${active ? 'pill-active' : 'pill-inactive'}`}
    >
      <span data-testid="pill-text" className="pill-text">
        {text}
      </span>
      <span className="pill-number">{count}</span>
    </button>
  );
}
