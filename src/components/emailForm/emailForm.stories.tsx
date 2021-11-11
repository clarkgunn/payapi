import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { EmailForm, EmailFormProps } from './emailForm';

export default {
  title: 'Components/EmailForm',
  component: EmailForm,
} as Meta;

const Template: Story<EmailFormProps> = (args) => <EmailForm {...args} />;

// Reuse that template for creating different stories
export const Form = Template.bind({});
Form.args = { buttonText: 'Submit', label: 'Email', onSubmit: () => {} };
