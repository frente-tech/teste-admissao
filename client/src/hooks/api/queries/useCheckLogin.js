import { useEffect } from 'react';
import useAxios from '../useAxios';
import { useUserCtx } from '../../../context/UserContext';

const STALE_TIME = 2;
const RETRIES = 2;

const REQUEST = {
  method: 'get',
  url: 'login/check',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

const useCheckLogin = () => {
  const { setUserData } = useUserCtx();
  const responseInstance = useAxios(REQUEST, {
    staleTime: STALE_TIME,
    retry: RETRIES,
  });

  useEffect(() => {
    if (responseInstance.isSuccess) {
      setUserData({ ...responseInstance?.data });
    }
  }, [responseInstance?.data, responseInstance.isSuccess, setUserData]);

  return { ...responseInstance };
};

export default useCheckLogin;
