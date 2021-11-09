import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function PageFrame({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default PageFrame;
