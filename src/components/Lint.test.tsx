import { screen, render } from '@testing-library/react';
import Link from './Link';

describe('Link component', () => {
  it('renders', () => {
    render(
      <Link href="/" aria-current={true}>
        Link to Home
      </Link>,
    );

    expect(screen.getByRole('link', { current: true })).toBeInTheDocument();
  });
});
