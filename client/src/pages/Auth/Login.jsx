import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import useCheckLogin from '../../hooks/api/queries/useCheckLogin';

const Login = () => {
  const navigate = useNavigate();
  const { isSuccess } = useCheckLogin();
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  return (
    <Box>
      Login
      <LoginForm />
    </Box>
  );
};

export default Login;
