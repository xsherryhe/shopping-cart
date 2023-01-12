import { render, screen } from '@testing-library/react';
import './setupTests';
import Shop from '../components/Shop';

jest.mock('../components/AddToCartForm', () => ({ id }) => (
  <form data-testid={`form-${id}`}>Form</form>
));

const testItems = [
  { id: 1, name: 'Item A', price: 9.5 },
  { id: 2, name: 'Item B', price: 20 },
];

describe('Shop', () => {
  describe('structure', () => {
    it('renders name of each shop item', () => {
      render(<Shop items={testItems} />);
      testItems.forEach(({ name }) => {
        const itemName = screen.getByText(name);
        expect(itemName).toBeInTheDocument();
      });
    });

    it('renders price of each shop item', () => {
      render(<Shop items={testItems} />);
      testItems.forEach(({ price }) => {
        const itemPrice = screen.getByText(`$${price.toFixed(2)}`);
        expect(itemPrice).toBeInTheDocument();
      });
    });

    it('renders a form for each shop item', () => {
      render(<Shop items={testItems} />);
      testItems.forEach(({ id }) => {
        const form = screen.getByTestId(`form-${id}`);
        expect(form).toBeInTheDocument();
      });
    });
  });
});
