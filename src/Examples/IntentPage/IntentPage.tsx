import React from 'react';
import Button from '../../Button/Button';
import TabNavigation from '../../TabNavigation/TabNavigation';
import TabPanel from '../../TabPanel/TabPanel';
import PillNavigation from '../../PillNavigation/PillNavigation';
import ChatBox from '../../ChatBox/ChatBox';
const SHORT_SENTENCE = 'Positive sentence Example';

const LONG_SENTENCE =
  "A bit longer positive sentence example, but don't worry we still have a lot of space";
const manySentences = [
  SHORT_SENTENCE,
  LONG_SENTENCE,
  SHORT_SENTENCE,
  LONG_SENTENCE,
  SHORT_SENTENCE,
  LONG_SENTENCE,
  SHORT_SENTENCE,
  LONG_SENTENCE,
];

const TabOne = () => {
  const BunchOfExamples = () => (
    <div>
      {manySentences.map((sentence, index) => (
        <ListItem key={index} text={sentence} />
      ))}
    </div>
  );
  return (
    <div>
      <h6>Type</h6>
      <h5>VISITOR_INTENT</h5>
      <h6>Description</h6>
      <h5>
        This intent will get triggered when the customer mentions anything about
        Photoshop crashing or freezing and not responding.
      </h5>
      <h6>Labeling and Guidelines</h6>
      <h5>
        <strong>Agent Answer/Statement</strong>
        <br />
        Definition: A statement agent given to help customers better understand
        the situation. Sometimes it would be in the form of an answer to
        question posed by the customer.
        <br />
        <strong>Comment:</strong>Introduction this concept helps lablers and
        tool user to understand the conversation and recognize the key moments
        during the conversation.
      </h5>
      <h6>Canononical Examples</h6>
      <PillNavigation
        pills={[
          { text: 'Positive', count: 4 },
          { text: 'Negative', count: 3 },
        ]}
      >
        <TabPanel>
          <BunchOfExamples />
        </TabPanel>
        <TabPanel>
          <BunchOfExamples />
        </TabPanel>
      </PillNavigation>
    </div>
  );
};
const TabTwo = () => (
  <div>
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
);

const TabThree = () => (
  <div>
    <h1>Labeling Guidelines</h1>
    <p>
      Second page of content: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec
      euismod, nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, Second
      page of content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod ipsum velit, eu aliquam eros tincidunt eget. Donec euismod,
      nisi euismod, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl
      aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc
      nisl aliquet, nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
      nunc nisl aliquet, nunc nisl aliquet, nunc nisl aliquet,
    </p>
  </div>
);
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

const POSITIVE_PANEL = () => (
  <div style={{ display: 'flex' }}>
    <div>
      {manySentences.map((sentence, index) => (
        <ListItem key={index} text={sentence} />
      ))}
    </div>
    <div>
      <ChatBox selected={['3']} messageHistory={DUMMY_DATA} />
    </div>
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

const ListItem = ({ text }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '15px 20px' }}>
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
};
function IntentPage() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div>
          <h1>Photoshop Crash</h1>
          <p>Subheader</p>
        </div>
        <div
          style={{ position: 'absolute', right: 0, top: 0, display: 'flex' }}
        >
          <Button>Mark as Complete</Button>
          <Button>Edit</Button>
        </div>
      </div>
      <TabNavigation tabs={['Details', 'Intent Labels', 'Labeling Guidelines']}>
        <TabPanel>
          <TabOne />
        </TabPanel>
        <TabPanel>
          <TabTwo />
        </TabPanel>
        <TabPanel>
          <TabThree />
        </TabPanel>
      </TabNavigation>
    </div>
  );
}

export default IntentPage;
