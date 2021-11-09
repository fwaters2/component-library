// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';
import { ModalProps } from './Modal.types';

describe('Modal Component', () => {
  const props: ModalProps = {
    title: 'test',
    visible: true,
    onOk: jest.fn(),
    onCancel: jest.fn(),
    children: <div>Test</div>,
  };

  it('should render correctly', () => {
    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });
});
