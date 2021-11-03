// Generated with util/create-component.js
import * as React from 'react';

import { MessageHistoryBoxProps } from './MessageHistoryBox.types';

import './MessageHistoryBox.scss';

export default function MessageHistoryBox({
  messageHistory,
  selected,
}: MessageHistoryBoxProps) {
  return (
    <div data-testid="MessageHistoryBox" className="message-history-container">
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
