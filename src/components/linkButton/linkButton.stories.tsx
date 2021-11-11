import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { LinkButton, LinkButtonProps } from './linkButton';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
} as Meta;

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />;

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
