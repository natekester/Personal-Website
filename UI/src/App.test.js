import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('makes sure that the page generally loads', () => {
  render(<App />);

  expect(screen.getByText('Nate Kester')).toBeInTheDocument();
  expect(screen.getByText('nate.d.kester@gmail.com')).toBeInTheDocument();
});
