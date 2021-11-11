import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Button from './Button';

describe('Button', () => {
  it('should render successfully.', () => {
    const { baseElement } = render(<Button>Submit</Button>);
    expect(baseElement).toBeTruthy();
  });
  it('should have no accessibility violations.', async () => {
    const { container } = render(<Button>Submit</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('should have the correct class.', () => {
    const primary = 'primary';
    const secondaryDark = 'secondary--dark';
    const secondaryLight = 'secondary--light';

    render(
      <section>
        <Button>{primary}</Button>
        <Button secondary>{secondaryLight}</Button>
        <Button secondary dark>
          {secondaryDark}
        </Button>
      </section>,
    );

    const primaryButton = screen.getByText(primary);
    const secondaryDarkButton = screen.getByText(secondaryDark);
    const secondaryLightButton = screen.getByText(secondaryLight);

    expect(primaryButton).toHaveClass(`button ${primary}`);
    expect(secondaryDarkButton).toHaveClass(`button ${secondaryDark}`);
    expect(secondaryLightButton).toHaveClass(`button ${secondaryLight}`);
  });
});
