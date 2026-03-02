import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders quiz page', () => {
  render(<App />);
  const linkElement = screen.getByText(/quizlet/i);
  expect(linkElement).toBeInTheDocument();
});
