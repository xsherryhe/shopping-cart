import { render, screen } from '@testing-library/react';
import './setupTests';
import Shop from '../components/Shop';

jest.mock(
  '../components/ShopItem',
  () =>
    ({ item: { name } }) =>
      name
);

jest.mock('../components/AddToCartForm', () => ({ id }) => (
  <form data-testid={`form-${id}`}>Form</form>
));

const testItems = [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
];

it('renders name of each shop item', () => {
  render(<Shop items={testItems} />);
  testItems.forEach(({ name }) => {
    const domItem = screen.getByText(name);
    expect(domItem).toBeInTheDocument();
  });
});

it('renders a form for each shop item', () => {
  render(<Shop items={testItems} />);
  testItems.forEach(({ id }) => {
    const form = screen.getByTestId(`form-${id}`);
    expect(form).toBeInTheDocument();
  });
});
