// Generated with util/create-component.js
import * as React from 'react';

import { ModalProps } from './Modal.types';

import './Modal.scss';
import Button from '../Button/Button';

export default function Modal(props: ModalProps) {
  const {
    title,
    visible,
    onOk,
    onCancel,
    okText,
    confirmLoading,
    width,
    className,
    footer,
    children,
  } = props;
  return (
    <div
      data-testid="Modal"
      className={`modal-container   ${visible ? 'open' : 'closed'}`}
    >
      <div className={`modal-content ${className}`} style={{ width }}>
        <div className="modal-header">
          <h3>{title}</h3>
          <Button
            data-testid="Modal-close"
            className="modal-close"
            onClick={onCancel}
          >
            X
          </Button>
        </div>
        <div className="modal-body">{children}</div>
        {footer || (
          <div className="modal-footer">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              onClick={onOk}
              style={{ marginLeft: '10px' }}
              loading={confirmLoading}
            >
              {okText || 'OK'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
