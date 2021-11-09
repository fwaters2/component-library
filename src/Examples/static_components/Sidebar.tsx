import React from 'react';
const SIDE_BAR_ITEMS = [
  'Chats',
  'PoV',
  'Actions',
  'Dialogue Policy',
  'Suggestions',
  'Hints',
  'QA',
  'Agent Progression',
  'Analysis Workshop',
  'Model Info',
];
function Sidebar() {
  return (
    <div style={{ background: 'white', width: '120px' }}>
      <div style={{ padding: '20px 10px' }}>
        <h4>AI Studio</h4>
      </div>
      <div style={{ margin: '30px 0', fontSize: '12px' }}>Customer Portal</div>
      {SIDE_BAR_ITEMS.map((item) => (
        <div key={item} style={{ margin: '20px 0', fontSize: '12px' }}>
          {item}
        </div>
      ))}
      <div style={{ marginTop: '40px', fontSize: '12px' }}>Logout</div>
    </div>
  );
}

export default Sidebar;
