import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../../components/SignupForm';
import useCheckLogin from '../../hooks/api/queries/useCheckLogin';

const Signup = () => {
  const { isSuccess } = useCheckLogin();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);
  return (
    <Box>
      Signup
      <SignupForm />
    </Box>
  );
};

export default Signup;
