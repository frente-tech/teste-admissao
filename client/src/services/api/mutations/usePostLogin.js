import axios from 'axios';
import { useMutation } from 'react-query';

const STALE_TIME = 5;

const usePostLogin = () => {
  const mutation = useMutation((newUser) => axios.post(
    '/login',
    newUser,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
    STALE_TIME,
  ));
  return mutation;
};

export default usePostLogin;
