import { render, screen } from '@testing-library/react';
import Manual from './ManualCodeBlocks';

test('renders learn react link', () => {
  render(<Manual />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
