import { render, screen } from '@testing-library/react';
import './setupTests';
import Header from '../components/Header';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

it('renders the header links', () => {
  render(<Header />);
  const links = screen.getAllByRole('link');
  expect(links.length).toBe(4);
});

it('renders the cart total in the cart link', () => {
  render(<Header cartTotal={5} />);
  const cartLink = screen.getByRole('link', { name: 'Cart (5)' });
  expect(cartLink).toBeInTheDocument();
});
