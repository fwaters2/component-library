import React from 'react';
import IntentPageComponent from './IntentPage';
import PageFrame from '../static_components/PageFrame';

export default {
  title: 'Example Pages/Intent Page',

  component: IntentPageComponent,
};

export const IntentPage = () => (
  <PageFrame>
    <IntentPageComponent />
  </PageFrame>
);
