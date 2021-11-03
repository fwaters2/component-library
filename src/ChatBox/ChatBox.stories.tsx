// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import ChatBoxComponent from './ChatBox';
import results from '../../.jest-test-results.json';

const DUMMY_DATA = [
  {
    id: '1',
    message: 'Hello, how can I help you?',
    user: 'self',
    timestamp: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    message: 'hi',
    user: 'other',
    timestamp: '2020-01-02T00:00:00.000Z',
  },
  {
    id: '3',
    message:
      'A bit longer positive sentence example, but don’t worry, we still have a lot of space.',
    user: 'other',
    timestamp: '2020-01-03T00:00:00.000Z',
  },
  {
    id: '4',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est dolor, feugiat in pellentesque sit amet, scelerisque eu leo. Vivamus ac enim sapien. Pellentesque a libero sit amet metus tempus iaculis ac egestas mauris. Duis non mauris eu quam finibus viverra. Praesent commodo urna ex, non cursus massa pulvinar vel. Morbi posuere mauris bibendum, consequat odio at, accumsan ex. Aliquam eu tempus nisl, vel feugiat libero. Nam magna nulla, condimentum ut purus non, sodales facilisis leo.',
    user: 'self',
    timestamp: '2020-01-04T00:00:00.000Z',
  },
  {
    id: '5',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est dolor, feugiat in pellentesque sit amet, scelerisque eu leo. Vivamus ac enim sapien. Pellentesque a libero sit amet metus tempus iaculis ac egestas mauris. Duis non mauris eu quam finibus viverra. Praesent commodo urna ex, non cursus massa pulvinar vel. Morbi posuere mauris bibendum, consequat odio at, accumsan ex. Aliquam eu tempus nisl, vel feugiat libero. Nam magna nulla, condimentum ut purus non, sodales facilisis leo.',
    user: 'self',
    timestamp: '2020-01-05T00:00:00.000Z',
  },
  {
    id: '6',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est dolor, feugiat in pellentesque sit amet, scelerisque eu leo. Vivamus ac enim sapien. Pellentesque a libero sit amet metus tempus iaculis ac egestas mauris. Duis non mauris eu quam finibus viverra. Praesent commodo urna ex, non cursus massa pulvinar vel. Morbi posuere mauris bibendum, consequat odio at, accumsan ex. Aliquam eu tempus nisl, vel feugiat libero. Nam magna nulla, condimentum ut purus non, sodales facilisis leo.',
    user: 'self',
    timestamp: '2020-01-06T00:00:00.000Z',
  },
];
export default {
  title: 'Component Library/Organisms/Chat Box',
  decorators: [withTests({ results })],
  component: ChatBoxComponent,
};

export const ChatBox = () => (
  <ChatBoxComponent selected={['3']} messageHistory={DUMMY_DATA} />
);
