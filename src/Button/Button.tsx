/* eslint-disable react/jsx-props-no-spreading */
// Generated with util/create-component.js
import * as React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

export default function Button(props: ButtonProps) {
  const {
    variant = 'solid',
    color,
    disabled = false,
    loading = false,
    testHover,
    children,
    ...rest
  } = props;
  const outlineStyles = color ? { color, borderColor: color } : {};
  const solidStyles = color ? { backgroundColor: color } : {};
  const loaderStyles =
    variant === 'outline'
      ? {
          borderColor: color || '#304ffe',
          borderRightColor: '#fff',
        }
      : {};
  const hasHoverEffect = !(loading || disabled);

  return (
    <button
      type="button"
      disabled={disabled}
      data-testid="Button"
      className={`button-default ${hasHoverEffect && 'active'} ${variant} ${
        disabled && 'disabled'
      } ${testHover && 'test-hover'}`}
      style={variant === 'solid' ? solidStyles : outlineStyles}
      {...rest}
    >
      <>
        <div
          className={`circle-loader ${loading ? 'fadeIn' : 'fadeOut'}`}
          style={loaderStyles}
        />
        <div className={`button-children ${!loading ? 'fadeIn' : 'fadeOut'}`}>
          {children}
        </div>
      </>
    </button>
  );
}
