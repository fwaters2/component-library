// Generated with util/create-component.js
type Variant = 'solid' | 'outline';
export interface ButtonProps {
  children?: React.ReactNode | string | number;
  variant?: Variant;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
