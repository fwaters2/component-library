// Generated with util/create-component.js
import React from 'react';
import { withTests } from '@storybook/addon-jest';
import ButtonComponent from './Button';
import results from '../../.jest-test-results.json';
import { ButtonProps } from './Button.types';

export default {
  title: 'Component Library/Atoms/Button',
  decorators: [withTests({ results })],
  component: ButtonComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
    color: {
      name: 'Color',
      control: { type: 'color' },
    },
    disabled: {
      name: 'isDisabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      name: 'isLoading',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onClick: {
      action: 'Button Clicked',
    },
  },
};

export const Dynamic = ({
  onClick,
  disabled,
  loading,
  variant,
  color,
}: ButtonProps) => (
  <ButtonComponent
    disabled={disabled}
    loading={loading}
    variant={variant}
    color={color}
    onClick={onClick}
  >
    <svg
      className="checkmark"
      style={{
        stroke: variant === 'outline' && !disabled ? '#304ffe' : '#fff',
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
    <span style={{ margin: '0 10px' }}>Mark as complete</span>
  </ButtonComponent>
);
const Label = ({ children }) => {
  return (
    <div style={{ margin: '30px 0 10px 0', alignSelf: 'flex-start' }}>
      {children}
    </div>
  );
};

const Column = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',

      margin: '0 10px',
    }}
  >
    {children}
  </div>
);
export const All = () => {
  const [loadingState, setLoadingState] = React.useState(false);
  React.useEffect(() => {
    // alternate loadingState every 1 second
    const interval = setInterval(() => {
      setLoadingState(!loadingState);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Column>
          <Label>Solid</Label>
          <ButtonComponent>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <span style={{ margin: '0 10px' }}>Mark as complete</span>
          </ButtonComponent>
          <Label>Hover</Label>
          <ButtonComponent testHover>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <span style={{ margin: '0 10px' }}>Mark as complete</span>
          </ButtonComponent>
          <Label>Loading State</Label>
          <ButtonComponent loading>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </ButtonComponent>
        </Column>
        <Column>
          <Label>Outline</Label>
          <ButtonComponent variant="outline">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                stroke: '#304ffe',
              }}
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <span style={{ margin: '0 10px' }}>Mark as complete</span>
          </ButtonComponent>
          <Label>Hover</Label>
          <ButtonComponent variant="outline" testHover>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                stroke: '#304ffe',
              }}
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <span style={{ margin: '0 10px' }}>Mark as complete</span>
          </ButtonComponent>
          <Label>Loading State</Label>
          <ButtonComponent variant="outline" loading>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </ButtonComponent>
        </Column>

        <Column>
          <Label>Disabled (both types)</Label>
          <ButtonComponent disabled>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <span style={{ margin: '0 10px' }}>Mark as complete</span>
          </ButtonComponent>
          <Label>Transition</Label>
          <ButtonComponent loading={loadingState}>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <span style={{ margin: '0 10px' }}>Mark as complete</span>
          </ButtonComponent>
          <Label>Variable Width</Label>
          <ButtonComponent style={{ alignSelf: 'flex-start' }}>
            Short Text
          </ButtonComponent>
        </Column>
      </div>
      <div>
        <p>
          <strong>Notes:</strong>
          <br />
          Make the button colors configurable. A property that can be passed to
          the button, with the default colors being blue and white. This way we
          only need two styles (solid and outlined) that can be combined with
          any color.
          <br />
          <br />
          For the hover state use a semi-transparent dark overlay (RGBA 0, 0, 0,
          0.15).
          <br />
          <br />
          For loading state use an animated spinner (try to find one matching
          this look). <br />
          <br />
          It would be nice to have a fade out/fade in transition between the
          text and loading spinner when the loading state is triggered.
          <br />
          <br />
          Buttons should have variable width
        </p>
      </div>
    </>
  );
};
