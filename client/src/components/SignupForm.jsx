import { Button } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUserCtx } from '../context/UserContext';
import CustomInput from './CustomInput';
import usePostSignup from '../hooks/api/mutations/usePostSignup';

const INPUTS = [
  { id: 'name', label: 'Nome' },
  { id: 'cpf', label: 'CPF' },
  { id: 'address', label: 'Endereço' },
  { id: 'birthdate', label: 'Data de nascimento' },
  { id: 'email', label: 'Email' },
  { id: 'password', label: 'Senha', type: 'password' },
];

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignupForm = () => {
  const { setUserData } = useUserCtx();
  const navigate = useNavigate();
  const mutation = usePostSignup();

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

  const renderInputs = () => INPUTS.map((input) => (
    <CustomInput
      key={ input.id }
      id={ input.id }
      label={ input.label }
      errors={ errors }
      register={ register }
      inputCfg={ {
        type: input.type || 'text',
      } }
    />
  ));

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      {renderInputs()}
      <Button isLoading={ mutation.isLoading } type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default SignupForm;
