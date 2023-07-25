// npm install jest @testing-library/react @testing-library/jest-dom --save-dev

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Test case 1
test('renders Register Form heading', () => {
  render(<App />);
  const headingElement = screen.getByText('Register Form');
  expect(headingElement).toBeInTheDocument();
});


