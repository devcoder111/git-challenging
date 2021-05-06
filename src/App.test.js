import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My really cool blog site logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/My really cool blog site/i);
  expect(linkElement).toBeInTheDocument();
});

<<<<<<< HEAD
test('renders Auto Review Article', () => {
  render(<App />);
  const linkElement = screen.getByText(/Auto Review:/i);
=======
test('renders Biology Today article', () => {
  render(<App />);
  const linkElement = screen.getByText(/Biology Today:/i);
>>>>>>> 374a3c5... feat: add Biology Today article
  expect(linkElement).toBeInTheDocument();
});