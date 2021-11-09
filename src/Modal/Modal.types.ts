import { ComponentProps } from 'react';

// Generated with util/create-component.js
export interface ModalProps extends ComponentProps<'div'> {
  title?: string;
  visible: boolean;
  onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
