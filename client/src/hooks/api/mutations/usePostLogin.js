import axios from 'axios';
import { useMutation } from 'react-query';

const ONE_SECOND = 1000;
const RETRY = 2;
const RETRY_DELAY = 2 * ONE_SECOND;

const REQUEST = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

const usePostLogin = () => {
  const mutation = useMutation(
    (user) => axios.post('auth/login', user, REQUEST),
    {
      retry: RETRY,
      retryDelay: RETRY_DELAY,
    },
  );
  return mutation;
};

export default usePostLogin;
