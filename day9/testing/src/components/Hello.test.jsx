import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello component with correct name', () => {
  render(<Hello name="Alice" />);
  const textElement = screen.getByText(/Hello, Alice/i);
  expect(textElement).toBeInTheDocument();
});
