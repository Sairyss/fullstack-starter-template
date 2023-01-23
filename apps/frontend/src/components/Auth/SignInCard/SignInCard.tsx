import { useGlobalStateStore } from '@GlobalState';
import { trpc } from '@utils/trpc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EmailAndPassword } from '../SignUpCard/SignUpCardUI';
import SignInCardUI from './SignInCardUI';

const SignInCard = () => {
  const state = useGlobalStateStore((state) => state);
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const handleRememberMe = (value: boolean) => {
    setRememberMe(value);
  };

  const signInMutation = trpc.auth.signIn.useMutation({
    onSuccess({ email, role, accessToken }) {
      const avatarUrl =
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9';
      const user = {
        username: email,
        role: role,
        avatarUrl,
      };
      state.signIn(user);
      toast.info('Signed in');

      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify({ ...user, accessToken }));
      }
      navigate('/');
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (values: EmailAndPassword) => {
    signInMutation.mutate(values);
  };

  return (
    <SignInCardUI
      onSubmit={onSubmit}
      rememberMe={rememberMe}
      handleRememberMe={handleRememberMe}
    />
  );
};

export default SignInCard;
