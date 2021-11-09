/* eslint-disable react/jsx-props-no-spreading */
// Generated with util/create-component.js
import * as React from 'react';

import './SearchBox.scss';

// Create search input component
export default function SearchBox(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const iconSize = 18;
  return (
    <div className="search-box" style={{ ...props.style }}>
      <input className="search-box__input" type="text" {...props} />
      <svg
        className="search-box__icon"
        height={iconSize}
        viewBox="0 0 48 48"
        width={iconSize}
      >
        <path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        <path d="M0 0h48v48H0z" fill="none" />
      </svg>
    </div>
  );
}
