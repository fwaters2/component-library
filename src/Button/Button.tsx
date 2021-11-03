// Generated with util/create-component.js
import * as React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

export default function Button({
  variant = 'solid',
  color,
  disabled = false,
  loading = false,
  children,
}: ButtonProps) {
  if (loading) {
    return (
      <button className="button-default active solid">
        <div className="circle-loader" />
      </button>
    );
  }
  if (disabled) {
    return (
      <button
        type="button"
        data-testid="Button"
        className="button-default disabled"
      >
        {children}
      </button>
    );
  }

  if (variant === 'outline') {
    const backgroundColor = color ? { color, borderColor: color } : {};
    return (
      <button
        type="button"
        data-testid="Button"
        className="button-default active outline"
        style={backgroundColor}
      >
        {children}
      </button>
    );
  }
  const backgroundColor = color ? { backgroundColor: color } : {};
  return (
    <button
      type="button"
      data-testid="Button"
      className="button-default active solid"
      style={backgroundColor}
    >
      {children}
    </button>
  );
}
