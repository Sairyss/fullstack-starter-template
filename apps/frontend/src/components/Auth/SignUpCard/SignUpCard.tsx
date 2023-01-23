import { trpc } from '@utils/trpc';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignUpCardUI, { EmailAndPassword } from './SignUpCardUI';

const SignUpCard = () => {
  const navigate = useNavigate();

  const signUpMutation = trpc.auth.signUp.useMutation({
    onSuccess({ email, role }) {
      toast.info('Success!');
      navigate('/login');
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (values: EmailAndPassword) => {
    signUpMutation.mutate(values);
  };
  return <SignUpCardUI onSubmit={onSubmit} />;
};

export default SignUpCard;
