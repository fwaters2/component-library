import { ComponentProps } from 'react';

export interface ModalProps extends ComponentProps<'div'> {
  title?: string;
  visible: boolean;
  onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  okText?: string;
  confirmLoading?: boolean;
  width?: number;
  className?: string;
  footer?: React.ReactNode;
}
