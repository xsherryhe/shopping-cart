import { render } from '@testing-library/react';
import Home from '../components/Home';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('Home', () => {
  describe('structure', () => {
    it('renders the home content', () => {
      const { container } = render(<Home />);
      expect(container).toMatchSnapshot();
    });
  });
});
