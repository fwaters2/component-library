import React from 'react';
import Button from '../../Button/Button';
import PillNavigation from '../../PillNavigation/PillNavigation';
import TabPanel from '../../TabPanel/TabPanel';

const POSITIVE_PANEL = () => (
  <div>
    <h1>Positive Items</h1>
    <p>
      First page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
    </p>
  </div>
);
const NEGATIVE_PANEL = () => (
  <div>
    <h1>Negative Items</h1>
    <p>
      Second page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
    </p>
  </div>
);

function CreateIntentPage() {
  const textAreaStyle = {
    width: '100%',
    border: 'none',
    resize: 'none',
    borderRadius: '6px',
    padding: '5px 20px',
  };
  return (
    <div style={{ padding: '40px' }}>
      <div style={{ position: 'relative' }}>
        <h1>Driver.Photoshop.Crash</h1>
        <span
          style={{
            fontSize: '10pt',
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '6px',
          }}
        >
          F1 0.77
        </span>
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            display: 'flex',
          }}
        >
          <Button variant="outline" style={{ marginRight: '20px' }}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <textarea style={textAreaStyle} />
      </div>
      <div>
        <h2>Labeling Guidelines</h2>
        <textarea style={textAreaStyle} />
      </div>
      <div>
        <h2>Canonical Examples</h2>

        <PillNavigation
          pills={[
            { text: 'Postive', count: 11 },
            { text: 'Negative', count: 15 },
          ]}
        >
          <TabPanel>
            <POSITIVE_PANEL />
          </TabPanel>
          <TabPanel>
            <NEGATIVE_PANEL />
          </TabPanel>
        </PillNavigation>
      </div>
    </div>
  );
}

export default CreateIntentPage;
