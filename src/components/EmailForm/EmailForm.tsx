import './EmailForm.module.css';
import Form from '@/components/Form';
import Button from '@/components/Button';

export interface Props {
  buttonText: string;
  label: string;
  onSubmit: (...args: any) => any;
}

export function EmailForm({ buttonText, label, onSubmit }: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <>
        <label htmlFor="email">{label}</label>
        <input type="email" name="email" id="email" />
        <Button type="submit">{buttonText}</Button>
      </>
    </Form>
  );
}

export default EmailForm;
