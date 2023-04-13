import TimelineSegment from '../shared-components/TimelineSegment';

import React from 'react';

function Education() {
  const image = './NK.png';
  const pluralsightDesc =
    'My team has created tooling to provide an entirely custom assessment experience. I have had the opportunity to train every member of my team, implement new documentation practices, testing patterns, and push sustainable clean code practices.';
  return (
    <TimelineSegment
      image={image}
      title="Software Engineer - Pluralsight"
      description={pluralsightDesc}
    ></TimelineSegment>
  );
}

export default Education;
