import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import Header from './Header';

test('makes sure that the page generally loads', async () => {
  render(<Header />, { wrapper: BrowserRouter });

  expect(screen.getByText('Nate Kester')).toBeInTheDocument();
  expect(screen.getByText('About Me')).toBeInTheDocument();
  expect(screen.getByText('Career')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText('Education')).toBeInTheDocument();
});
