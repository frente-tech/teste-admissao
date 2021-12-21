import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUserCtx } from '../context/UserContext';
import usePostLogin from '../services/api/mutations/usePostLogin';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Form = () => {
  const { setUserData } = useUserCtx();
  const navigate = useNavigate();
  const mutation = usePostLogin();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    mutation.mutate(values, {
      onSuccess: ({ data: { email, role } }) => {
        setUserData({
          email,
          role,
        });
        navigate('/');
      },
    });
  };

  console.log('render');
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>

      <FormControl isInvalid={ errors?.email }>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" { ...register('email') } />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={ errors?.password }>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" { ...register('password') } />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>

      <Button isLoading={ isSubmitting } type="submit">
        Login
      </Button>
    </form>
  );
};

export default Form;
