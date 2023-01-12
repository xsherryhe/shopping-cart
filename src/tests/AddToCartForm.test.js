import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import './setupTests';
import AddToCartForm from '../components/AddToCartForm';

jest.mock(
  '../components/QuantityField',
  () =>
    ({ quantity, changeQuantity, input }) =>
      (
        <input
          type="number"
          value={quantity}
          onChange={(e) => changeQuantity(e.target.value)}
          ref={input}
          required
        />
      )
);

const onSubmit = jest.fn();

describe('AddToCartForm', () => {
  describe('structure', () => {
    it('renders form with a starting input of 1', () => {
      render(<AddToCartForm />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveValue(1);
    });
  });

  describe('events', () => {
    describe('when the form is submitted', () => {
      describe('when the input is invalid', () => {
        it('displays an error message', () => {
          render(<AddToCartForm />);
          const input = screen.getByRole('spinbutton');
          userEvent.clear(input);
          const button = screen.getByRole('button', { name: 'Add to Cart' });
          userEvent.click(button);

          const error = screen.getByTestId('error');
          expect(error).toBeInTheDocument();
        });

        it('does not invoke the onSubmit callback', () => {
          render(<AddToCartForm onSubmit={onSubmit} />);
          const input = screen.getByRole('spinbutton');
          userEvent.clear(input);
          const button = screen.getByRole('button', { name: 'Add to Cart' });
          userEvent.click(button);

          expect(onSubmit).not.toHaveBeenCalled();
        });
      });

      describe('when the input is valid', () => {
        it('displays a success message', () => {
          render(<AddToCartForm onSubmit={onSubmit} />);
          const input = screen.getByRole('spinbutton');
          userEvent.type(input, '4');
          const button = screen.getByRole('button', { name: 'Add to Cart' });
          userEvent.click(button);

          const message = screen.getByText('Added to cart!');
          expect(message).toBeInTheDocument();
        });

        it('invokes the onSubmit callback', () => {
          render(<AddToCartForm onSubmit={onSubmit} />);
          const input = screen.getByRole('spinbutton');
          userEvent.type(input, '3');
          const button = screen.getByRole('button', { name: 'Add to Cart' });
          userEvent.click(button);

          expect(onSubmit).toHaveBeenCalled();
        });
      });
    });

    describe('when the input is changed after submission', () => {
      it('preserves the error message', () => {
        render(<AddToCartForm />);
        const input = screen.getByRole('spinbutton');
        userEvent.clear(input);
        const button = screen.getByRole('button', { name: 'Add to Cart' });
        userEvent.click(button);
        userEvent.type(input, '1');

        const error = screen.getByTestId('error');
        expect(error).toBeInTheDocument();
      });

      it('removes the success message', () => {
        render(<AddToCartForm onSubmit={onSubmit} />);
        const input = screen.getByRole('spinbutton');
        userEvent.type(input, '6');
        const button = screen.getByRole('button', { name: 'Add to Cart' });
        userEvent.click(button);
        userEvent.type(input, '0');

        const message = screen.queryByText('Added to cart!');
        expect(message).toBeNull();
      });
    });
  });
});
