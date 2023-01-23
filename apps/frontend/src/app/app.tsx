import { Route, Routes } from 'react-router-dom';
import SidebarWithHeader from '../components/SidebarWithHeader/SidebarWithHeader';
import { QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '../utils/trpc';
import SignUpCard from '../components/Auth/SignUpCard/SignUpCard';
import SignInCard from '../components/Auth/SignInCard/SignInCard';
import { useQueryTrpcClient } from './useQueryClient';
import AuthVerify from '../components/Auth/AuthVerify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../pages/Home';
import { Box } from '@chakra-ui/react';

export function App() {
  const { queryClient, trpcClient } = useQueryTrpcClient();
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar
        closeOnClick
      />
      <QueryClientProvider client={queryClient}>
        <AuthVerify />
        <SidebarWithHeader>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUpCard />} />
            <Route path="/login" element={<SignInCard />} />
            <Route path="*" element={<Box>Not Found</Box>} />
          </Routes>
        </SidebarWithHeader>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
