// Generated with util/create-component.js
import * as React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

export default function Button({
  variant = 'solid',
  color,
  disabled = false,
  loading = false,
  onClick = () => console.log('No clickAction Passed to Button Component'),
  children,
}: ButtonProps) {
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
        onClick={onClick}
      >
        <>
          <div
            className={`circle-loader ${loading ? 'fadeIn' : 'fadeOut'}`}
            style={{ borderColor: '#304ffe', borderRightColor: '#fff' }}
          />
          <div className={`button-children ${!loading ? 'fadeIn' : 'fadeOut'}`}>
            {children}
          </div>
        </>
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
      onClick={onClick}
    >
      <>
        <div className={`circle-loader ${loading ? 'fadeIn' : 'fadeOut'}`} />
        <div className={`button-children ${!loading ? 'fadeIn' : 'fadeOut'}`}>
          {children}
        </div>
      </>
    </button>
  );
}
