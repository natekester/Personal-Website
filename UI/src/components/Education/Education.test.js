import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Education from './Education';

test('makes sure that the page generally loads', async () => {
  render(<Education />);

  expect(screen.getByText('University of Utah')).toBeInTheDocument();
  expect(screen.getByText('2011 - 2015')).toBeInTheDocument();
  expect(screen.getByText('B.S. Materials Engineering')).toBeInTheDocument();
  expect(screen.getByText('UCSD - Multiple CS Courses')).toBeInTheDocument();
  expect(
    screen.getByText('AWS - Practitioner Certification')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Harvard - CS50 Web Development')
  ).toBeInTheDocument();
});
