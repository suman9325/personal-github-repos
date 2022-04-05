import { render, screen } from '@testing-library/react';
import App from '../App';

test('div', () => {
  render(<App />);
  const mainDiv = screen.getByTestId('app');
  expect(mainDiv).toBeInTheDocument();
});
