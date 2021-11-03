// Generated with util/create-component.js
import * as React from 'react';

import { ChatBoxProps } from './ChatBox.types';

import './ChatBox.scss';

export default function ChatBox({ messageHistory, selected }: ChatBoxProps) {
  return (
    <div data-testid="ChatBox" className="message-history-container">
      {messageHistory.map((x) => {
        if (x.user === 'other') {
          return (
            <div
              key={x.id}
              id={x.id}
              className={`message message-inbound ${
                selected.includes(x.id) && 'message-selected'
              }`}
            >
              {x.message}
            </div>
          );
        } else {
          return (
            <div
              key={x.id}
              id={x.id}
              className={`message message-outbound ${
                selected.includes(x.id) && 'message-selected'
              }`}
            >
              {x.message}
            </div>
          );
        }
      })}
    </div>
  );
}
