import { Progress } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserCtx } from '../context/UserContext';
import useCheckLogin from '../hooks/api/queries/useCheckLogin';

const PrivateRoutes = () => {
  const {
    setUserData,
  } = useUserCtx();
  const { response, isSuccess, isLoading, error } = useCheckLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && response?.data?.email.length) {
      setUserData({ ...response?.data });
    }
    if (error) navigate('/login');
  }, [error, isSuccess, navigate, response, setUserData]);

  return (
    <>
      {isLoading && <Progress isIndeterminate />}
      {!isLoading && isSuccess && <Outlet />}
    </>
  );
};

export default PrivateRoutes;
