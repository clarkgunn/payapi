import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import LinkButton from '@/components/LinkButton';

describe('Button', () => {
  it('should render successfully.', () => {
    const { baseElement } = render(<LinkButton>Submit</LinkButton>);
    expect(baseElement).toBeTruthy();
  });
  it('should have no accessibility violations.', async () => {
    const { container } = render(<LinkButton>Submit</LinkButton>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('should have the correct class.', () => {
    const primary = 'primary';
    const secondaryDark = 'secondary--dark';
    const secondaryLight = 'secondary--light';

    render(
      <section>
        <LinkButton>{primary}</LinkButton>
        <LinkButton secondary>{secondaryLight}</LinkButton>
        <LinkButton secondary dark>
          {secondaryDark}
        </LinkButton>
      </section>,
    );

    const primaryButton = screen.getByText(primary);
    const secondaryDarkButton = screen.getByText(secondaryDark);
    const secondaryLightButton = screen.getByText(secondaryLight);

    expect(primaryButton).toHaveClass(`link-button ${primary}`);
    expect(secondaryDarkButton).toHaveClass(`link-button ${secondaryDark}`);
    expect(secondaryLightButton).toHaveClass(`link-button ${secondaryLight}`);
  });
});
