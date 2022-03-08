import React from 'react';
import * as Yup from 'yup';
import { FiLock, FiMail } from 'react-icons/fi';
import GenericForm from '@components/Generic/Form';
import { IFieldProps, ISignInFormData } from '@/types';

const SignInForm: React.FC = () => {
  const initialValues: ISignInFormData = { email: '', password: '' };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email Inválido')
      .required('Este campo é obrigatório'),
    password: Yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres')
  });

  const fields: IFieldProps[] = [
    { name: 'email', type: 'email', icon: FiMail },
    { name: 'password', type: 'password', icon: FiLock }
  ];

  return (
    <GenericForm
      fields={fields}
      initialValues={initialValues}
      label="Login"
      validationSchema={SignInSchema}
      onSubmit={() => {}}
      submitButtonText="Entrar"
    />
  );
};

export default SignInForm;
