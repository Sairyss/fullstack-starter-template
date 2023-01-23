import { ChakraProvider, theme } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import AuthHeaderUI, { AuthHeaderProps } from './AuthHeaderUI';

export default {
  component: AuthHeaderUI,
  title: 'AuthHeaderUI',
} as Meta;

const Template: Story<AuthHeaderProps> = (args) => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthHeaderUI {...args} />
    </BrowserRouter>
  </ChakraProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  user: {
    username: 'user@gmail.com',
    role: 'admin',
    avatarUrl:
      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  },
};
