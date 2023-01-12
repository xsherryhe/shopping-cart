import { render, screen } from '@testing-library/react';
import './setupTests';
import App from '../App';

jest.mock('../components/Header', () => {
  return () => <header>Header</header>;
});

jest.mock('react-router-dom', () => {
  return {
    Routes: () => 'Routes',
    Route: () => 'Route',
    useLocation: () => ({ pathname: '' }),
  };
});

it('renders the header', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

it('renders the main content', () => {
  render(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
