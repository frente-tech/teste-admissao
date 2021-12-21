import { Progress } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserCtx } from '../context/UserContext';
import useCheckLogin from '../services/api/queries/useCheckLogin';

const PrivateRoute = () => {
  const {
    setUserData,
  } = useUserCtx();
  const { response, isSuccess, isLoading, error } = useCheckLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && response?.data?.email.length) {
      setUserData({ ...response?.data });
    }
  }, [isSuccess, response, setUserData]);
  if (error) navigate('/login');

  return (
    <>
      {isLoading && <Progress isIndeterminate />}
      {!isLoading && isSuccess && <Outlet />}
    </>
  );
};

export default PrivateRoute;
