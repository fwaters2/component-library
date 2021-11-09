import { ComponentProps } from 'react';

// Generated with util/create-component.js
type Variant = 'solid' | 'outline';
export interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant;
  color?: string;
  loading?: boolean;
  testHover?: boolean;
}
