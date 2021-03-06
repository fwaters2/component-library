// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import ChatBox from './ChatBox';

describe('ChatBox Component', () => {
  it('should highlight selected messages', () => {
    const DUMMY_MESSAGES = [
      {
        id: '1',
        text: 'Hello',
        user: 'self',
      },
      {
        id: '2',
        text: 'World',
        user: 'other',
      },
      { id: '3', text: 'something else', user: 'other' },
    ];

    const renderComponent = () =>
      render(<ChatBox selected={['2']} messageHistory={DUMMY_MESSAGES} />);

    const { getByTestId } = renderComponent();

    const component = getByTestId('ChatBox');
    const selectedMessage = component.querySelector('.message-selected');

    expect(selectedMessage.id).toBe('2');
  });
});
