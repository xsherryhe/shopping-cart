import { render, screen } from '@testing-library/react';
import './setupTests';
import Cart from '../components/Cart';

const testCart = [
  { id: 1, name: 'Item C', price: 12.2, quantity: 3 },
  { id: 2, name: 'Item A', price: 3, quantity: 1 },
];

describe('Cart', () => {
  describe('structure', () => {
    it('renders cart headings', () => {
      render(<Cart />);
      const headings = screen
        .getAllByRole('columnheader')
        .map((element) => element.textContent);
      expect(headings).toEqual(['Item', 'Amount', 'Price', 'Total']);
    });

    it('renders name of each cart item', () => {
      render(<Cart cart={testCart} />);
      testCart.forEach(({ name }) => {
        const itemName = screen.getByText(name);
        expect(itemName).toBeInTheDocument();
      });
    });

    it('renders quantity of each cart item', () => {
      render(<Cart cart={testCart} />);
      testCart.forEach(({ quantity }) => {
        const itemQuantity = screen.getByText(quantity);
        expect(itemQuantity).toBeInTheDocument();
      });
    });

    it('renders total price of each cart item', () => {
      render(<Cart cart={testCart} />);
      const price1 = screen.getByText('$36.60');
      const price2 = screen.getByText('$3.00');
      expect(price1).toBeInTheDocument();
      expect(price2).toBeInTheDocument();
    });

    it('renders cart items in alphabetical order', () => {
      render(<Cart cart={testCart} />);
      const cells = screen.getAllByRole('cell');
      const itemAIndex = cells.findIndex(
        (cell) => cell.textContent === 'Item A'
      );
      const itemCIndex = cells.findIndex(
        (cell) => cell.textContent === 'Item C'
      );
      expect(itemAIndex).toBeLessThan(itemCIndex);
    });

    it('renders total price of all cart items', () => {
      render(<Cart cart={testCart} />);
      const totalPrice = screen.getByText('$39.60');
      expect(totalPrice).toBeInTheDocument();
    });
  });
});
