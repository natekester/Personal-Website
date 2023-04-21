import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('makes sure that the page generally loads', () => {
  render(<App />);

  expect(screen.getByText('Nate Kester')).toBeInTheDocument();
  expect(screen.getByText('nate.d.kester@gmail.com')).toBeInTheDocument();
});

test('Check that Each page renders when clicking the text', async () => {
  render(<App />);

  //Generally picking "solid" elements of each page to ensure navbar works

  //check About Me page Renders
  const AboutMeNav = screen.getByText('About Me');
  await userEvent.click(AboutMeNav);
  expect(screen.getByText("Hi! I'm Nate")).toBeInTheDocument();

  //check Projects page Renders
  const projectsNav = screen.getByText('Projects');
  await userEvent.click(projectsNav);
  expect(screen.getByText('This Web Page!')).toBeInTheDocument();

  //check Career page Renders
  const careerNav = screen.getByText('Career');
  await userEvent.click(careerNav);
  expect(
    screen.getByText('Software Engineer II (Remote) - Pluralsight')
  ).toBeInTheDocument();

  //check Educationpage Renders
  const educationNav = screen.getByText('Education');
  await userEvent.click(educationNav);
  expect(screen.getByText('University of Utah')).toBeInTheDocument();
});
