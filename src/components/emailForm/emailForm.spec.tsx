import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import EmailForm from './EmailForm';

describe('Email', () => {
  it('should have no accessibility violations.', async () => {
    const onSubmit = jest.fn();
    const label = 'Email';
    const buttonText = 'submit';
    const { container } = render(
      <EmailForm onSubmit={onSubmit} label={label} buttonText={buttonText} />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('Should be able to be submitted', async () => {
    const onSubmit = jest.fn();
    const label = 'Email';
    const buttonText = 'submit';

    render(
      <EmailForm onSubmit={onSubmit} label={label} buttonText={buttonText} />,
    );

    const email = 'foobar@example.com';
    const formInput = screen.getByLabelText(label) as HTMLInputElement;
    formInput.value = email;

    fireEvent.click(screen.getByText(buttonText));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        email,
      }),
    );
  });
});
