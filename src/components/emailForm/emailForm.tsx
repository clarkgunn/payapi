import './emailForm.module.css';
import { Form } from '@/components/form';
import Button from '../button';

export interface EmailFormProps {
  buttonText: string;
  label: string;
  onSubmit: (...args: any) => any;
}

export function EmailForm({ buttonText, label, onSubmit }: EmailFormProps) {
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
