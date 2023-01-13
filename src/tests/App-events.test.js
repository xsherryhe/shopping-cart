import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import './setupTests';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

function addToCart() {
  const shopLink = screen.getByRole('link', { name: 'Shop' });
  userEvent.click(shopLink);
  const addToCartButton = screen.getAllByRole('button', {
    name: 'Add to Cart',
  })[0];
  userEvent.click(addToCartButton);
}

function changeCartQuantity() {
  const cartLink = screen.getByRole('link', { name: /Cart/ });
  userEvent.click(cartLink);
  const incrementButton = screen.getAllByRole('button', { name: '+' })[0];
  userEvent.click(incrementButton);
}

function deleteFromCart() {
  const cartLink = screen.getByRole('link', { name: /Cart/ });
  userEvent.click(cartLink);
  const deleteButton = screen.getAllByRole('button', { name: 'Remove' })[0];
  userEvent.click(deleteButton);
}

const testItems = [{ name: 'Item A', price: 50 }];
describe('App', () => {
  describe('events', () => {
    describe('when an item is added to the cart', () => {
      it('renders the new cart total in the header', () => {
        render(
          <BrowserRouter>
            <App appItems={testItems} />
          </BrowserRouter>
        );
        const cartLink = screen.getByRole('link', { name: /Cart/ });
        expect(cartLink).toHaveTextContent('0');
        addToCart();

        expect(cartLink).not.toHaveTextContent('0');
        expect(cartLink).toHaveTextContent('1');
      });

      it('renders the cart with the item on the cart page', () => {
        render(
          <BrowserRouter>
            <App appItems={testItems} />
          </BrowserRouter>
        );
        const cartLink = screen.getByRole('link', { name: /Cart/ });
        userEvent.click(cartLink);
        const itemBefore = screen.queryByRole('cell', { name: 'Item A' });
        expect(itemBefore).toBeNull();
        addToCart();

        userEvent.click(cartLink);
        const itemAfter = screen.getByRole('cell', { name: 'Item A' });
        expect(itemAfter).toBeInTheDocument();
      });
    });

    describe("when a cart item's quantity is changed", () => {
      it('renders the new cart total in the header', () => {
        render(
          <BrowserRouter>
            <App appItems={testItems} />
          </BrowserRouter>
        );
        addToCart();
        changeCartQuantity();

        const cartLink = screen.getByRole('link', { name: /Cart/ });
        expect(cartLink).toHaveTextContent('2');
      });

      it('renders the cart with the new item quantity on the cart page', () => {
        render(
          <BrowserRouter>
            <App appItems={testItems} />
          </BrowserRouter>
        );
        addToCart();
        const cartLink = screen.getByRole('link', { name: /Cart/ });
        userEvent.click(cartLink);
        const quantity = screen.getByRole('cell', { name: /1/ });
        expect(quantity).toBeInTheDocument();
        changeCartQuantity();

        expect(quantity).not.toHaveTextContent('1');
        expect(quantity).toHaveTextContent('2');
      });
    });

    describe('when an item is deleted from the cart', () => {
      it('renders the new cart total in the header', () => {
        render(
          <BrowserRouter>
            <App appItems={testItems} />
          </BrowserRouter>
        );
        addToCart();
        deleteFromCart();

        const cartLink = screen.getByRole('link', { name: /Cart/ });
        expect(cartLink).toHaveTextContent('0');
      });

      it('renders the cart without the item on the cart page', () => {
        render(
          <BrowserRouter>
            <App appItems={testItems} />
          </BrowserRouter>
        );
        addToCart();
        deleteFromCart();

        const item = screen.queryByRole('cell', { name: 'Item A' });
        expect(item).toBeNull();
      });
    });
  });
});
