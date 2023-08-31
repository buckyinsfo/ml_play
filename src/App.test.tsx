import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const title = "ML Play"
  render(<App appTitle={ title } />);
  const linkElement = screen.getByText(/ml play/i);
  expect(linkElement).toBeInTheDocument();
});
 