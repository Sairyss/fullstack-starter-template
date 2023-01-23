import { ChakraProvider, theme } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import SignUpCardUI from './SignUpCardUI';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default {
  component: SignUpCardUI,
  title: 'SignUpCardUI',
} as Meta;

const Template: Story = (args) => {
  const handleOnSubmit = () => {
    //
  };
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar
        closeOnClick
      />
      <BrowserRouter>
        <SignUpCardUI onSubmit={handleOnSubmit} {...args} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
