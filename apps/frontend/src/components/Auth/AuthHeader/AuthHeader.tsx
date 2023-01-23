import { useGlobalStateStore } from '@GlobalState';
import AuthHeaderUI from './AuthHeaderUI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthHeader = () => {
  const state = useGlobalStateStore((state) => state);
  const navigate = useNavigate();

  const handleSignOut = () => {
    state.signOut();
    localStorage.removeItem('user');
    toast.info('Signed out');
    navigate('/');
  };

  return <AuthHeaderUI user={state.user} handleSignOut={handleSignOut} />;
};

export default AuthHeader;
