// Generated with util/create-component.js
import React from 'react';
import ModalComponent from './Modal';
import results from '../../.jest-test-results.json';
import Button from '../Button/Button';

import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Component Library/Molecules/Modal',
  decorators: [withTests({ results })],
  component: ModalComponent,
  parameters: {
    layout: 'centered',
  },
};

export const Modal = () => {
  const [isOpen, toggleOpen] = React.useState(true);
  return (
    <div>
      <Button onClick={() => toggleOpen(!isOpen)}>Click Me!</Button>
      <ModalComponent
        title="Basic Modal"
        visible={isOpen}
        onOk={() => toggleOpen(false)}
        onCancel={() => toggleOpen(false)}
      >
        <div>Some Contents...</div>
        <div>Some Contents...</div>
        <div>Some Contents...</div>
      </ModalComponent>
    </div>
  );
};
