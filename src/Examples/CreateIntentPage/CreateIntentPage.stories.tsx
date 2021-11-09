import React from 'react';
import CreateIntentPageComponent from './CreateIntentPage';
import PageFrame from '../static_components/PageFrame';

export default {
  title: 'Example Pages/Create Intent Page',

  component: CreateIntentPageComponent,
};

export const CreateIntentPage = () => (
  <PageFrame>
    <CreateIntentPageComponent />
  </PageFrame>
);
