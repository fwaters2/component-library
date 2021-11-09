// Generated with util/create-component.js
import * as React from 'react';

import { ModalProps } from './Modal.types';

import './Modal.scss';
import Button from '../Button/Button';

export default function Modal(props: ModalProps) {
  const { title, visible, onOk, onCancel, children } = props;
  return (
    <div
      data-testid="Modal"
      className={`modal-container   ${visible ? 'open' : 'closed'}`}
    >
      <div className="modal-content">
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
        <div className="modal-footer">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onOk} style={{ marginLeft: '10px' }}>
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}
