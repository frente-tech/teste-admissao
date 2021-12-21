import useAxios from '../../../hooks/useAxios';

const useCheckLogin = () => {
  const request = {
    method: 'get',
    url: 'login/check',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const responseInstance = useAxios(request, {
    staleTime: 2,
    retry: 1,
  });
  return { ...responseInstance };
};

export default useCheckLogin;
