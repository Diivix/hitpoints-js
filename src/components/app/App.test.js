import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  const appElement = screen.getByTitle('App');
  expect(appElement).toBeInTheDocument();
});
