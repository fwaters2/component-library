import React from 'react';
import ModalComponent from './Modal';
import Button from '../Button/Button';

export default {
  title: 'WIP/Modal',
  component: ModalComponent,
  parameters: {
    layout: 'centered',
  },
};

export const Modal = () => {
  const [isOpen, toggleOpen] = React.useState(true);
  const [editing, setEditing] = React.useState(false);
  const [submission, setSubmission] = React.useState(false);

  const handleCancel = () => {
    toggleOpen(false);
  };

  const onOk = () => {
    setSubmission(true);
    setTimeout(() => {
      setSubmission(false);
      toggleOpen(false);
    }, 3000);
  };
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Button
          variant="outline"
          onClick={() => {
            setEditing(true);
            toggleOpen(true);
          }}
        >
          Edit Intent!
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            setEditing(false);
            toggleOpen(true);
          }}
        >
          New Intent!
        </Button>
      </div>
      <ModalComponent
        title={editing ? 'Edit Intent' : 'New Intent'}
        visible={isOpen}
        onOk={onOk}
        okText={editing ? 'Save' : 'Create'}
        onCancel={handleCancel}
        confirmLoading={submission}
      >
        <div>Some Contents...</div>
        <div>Some Contents...</div>
        <div>Some Contents...</div>
      </ModalComponent>
    </div>
  );
};
