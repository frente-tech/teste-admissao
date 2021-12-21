import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { useUserCtx } from '../../context/UserContext';
import useCheckLogin from '../../services/api/queries/useCheckLogin';

const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = useUserCtx();
  const { isSuccess, response } = useCheckLogin();
  useEffect(() => {
    if (isSuccess) {
      setUserData({ ...response?.data });
    }
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate, response, setUserData]);

  return (
    <LoginForm />
  );
};

export default Login;
