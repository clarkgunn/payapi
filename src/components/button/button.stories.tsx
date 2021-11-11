import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { children: 'Primary' };

export const SecondaryLight = Template.bind({});
SecondaryLight.args = { children: 'Secondary Light', secondary: true };

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Secondary Dark',
  secondary: true,
  dark: true,
};
