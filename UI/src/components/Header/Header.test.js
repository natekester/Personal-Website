import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('make sure the headers are there', async () => {
  render(<Header />, { wrapper: BrowserRouter });

  expect(screen.getByText('Nate Kester')).toBeInTheDocument();
  expect(screen.getByText('About Me')).toBeInTheDocument();
  expect(screen.getByText('Career')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText('Education')).toBeInTheDocument();
});
