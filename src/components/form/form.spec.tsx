import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Form from './Form';

describe('Form', () => {
  it('should render successfully', async () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <Form onSubmit={onSubmit}>
        <label>
          Foobar
          <input type="email" name="email" />
        </label>
      </Form>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('should have no accessibility violations.', async () => {
    const onSubmit = jest.fn();
    const label = 'Email';
    render(
      <Form onSubmit={onSubmit}>
        <>
          <label>
            {label}
            <input type="email" name="email" />
          </label>
          <button type="submit">submit</button>
        </>
      </Form>,
    );

    const email = 'foobar@example.com';
    const formInput = screen.getByLabelText(label) as HTMLInputElement;
    formInput.value = email;

    fireEvent.click(screen.getByText(/submit/i));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        email,
      }),
    );
  });
});
