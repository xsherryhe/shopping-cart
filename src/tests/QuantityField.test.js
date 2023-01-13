import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import './setupTests';

import { createRef } from 'react';
import QuantityField from '../components/QuantityField';

const changeQuantityFn = (data) =>
  jest.fn((val) => {
    data.quantity = typeof val === 'function' ? val(data.quantity) : val;
  });

describe('QuantityField', () => {
  describe('structure', () => {
    it('renders an input with quantity prop if input prop is truthy', () => {
      render(<QuantityField quantity={2} input={createRef()} />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveValue(2);
    });

    it('renders a non-editable display of quantity prop if input prop is falsy', () => {
      render(<QuantityField quantity={4} input={false} />);
      const input = screen.queryByRole('spinbutton');
      const display = screen.getByText('4');
      expect(input).toBeNull();
      expect(display).toBeInTheDocument();
    });
  });

  describe('events', () => {
    it('calls the changeQuantity callback to subtract 1 when the decrement button is clicked', () => {
      const data = { quantity: 3 };
      const changeQuantity = changeQuantityFn(data);
      render(
        <QuantityField
          quantity={data.quantity}
          changeQuantity={changeQuantity}
        />
      );
      const button = screen.getByRole('button', { name: '-' });
      userEvent.click(button);

      expect(changeQuantity).toHaveBeenCalled();
      expect(data.quantity).toBe(2);
    });

    it('calls the changeQuantity callback to add 1 when the increment button is clicked', () => {
      const data = { quantity: 5 };
      const changeQuantity = changeQuantityFn(data);
      render(
        <QuantityField
          quantity={data.quantity}
          changeQuantity={changeQuantity}
        />
      );
      const button = screen.getByRole('button', { name: '+' });
      userEvent.click(button);

      expect(changeQuantity).toHaveBeenCalled();
      expect(data.quantity).toBe(6);
    });

    it('calls the changeQuantity callback with the new value when the input is changed', () => {
      const data = { quantity: 1 };
      const changeQuantity = changeQuantityFn(data);
      render(
        <QuantityField
          quantity={data.quantity}
          changeQuantity={changeQuantity}
          input={createRef()}
        />
      );
      const input = screen.getByRole('spinbutton');
      userEvent.type(input, '2');
      expect(changeQuantity).toHaveBeenCalled();
      expect(data.quantity).toBe('12');
    });
  });
});
