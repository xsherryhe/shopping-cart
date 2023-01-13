import { render, screen } from '@testing-library/react';
import './setupTests';
import App from '../App';

jest.mock('../components/Header', () => () => <header>Header</header>);
jest.mock('react-router-dom', () => ({
  Routes: () => 'Routes',
  Route: () => 'Route',
  useLocation: () => ({ pathname: '' }),
}));

describe('App', () => {
  describe('structure', () => {
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
  });
});
