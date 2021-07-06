import { render, screen } from '@testing-library/react';
import App from './App';

//npm run test (1 success)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
