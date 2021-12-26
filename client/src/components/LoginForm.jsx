import {
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUserCtx } from '../context/UserContext';
import usePostLogin from '../hooks/api/mutations/usePostLogin';
import CustomInput from './CustomInput';

const inputs = [
  { id: 'email', label: 'Email' },
  { id: 'password', label: 'Senha', type: 'password' },
];

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
    formState: { errors },
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

  const renderInputs = () => inputs.map((input) => (
    <CustomInput
      key={ input.id }
      id={ input.id }
      label={ input.label }
      inputCfg={ {
        type: input.type || 'text',
      } }
      errors={ errors }
      register={ register }
    />
  ));

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      {renderInputs()}
      <Button isLoading={ mutation.isLoading } type="submit">
        Login
      </Button>
    </form>
  );
};

export default Form;
