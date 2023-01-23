import 'react-notifications-component/dist/theme.css';
import '../../../styles.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { ReactNotifications } from 'react-notifications-component';
import SignUpCardUI from './SignUpCardUI';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: SignUpCardUI,
  title: 'SignUpCardUI',
} as Meta;

const Template: Story = (args) => (
  <ChakraProvider theme={theme}>
    <ReactNotifications />
    <BrowserRouter>
      <SignUpCardUI {...args} />
    </BrowserRouter>
  </ChakraProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
