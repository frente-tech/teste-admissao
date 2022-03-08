import React from 'react';
import { Formik } from 'formik';
import Button from '@components/UI/Button';
import Input from '@components/UI/Input';
import { IGenericFormProps } from '@/types';
import { Container, Form, InputContainer, Label } from './styles';

const GenericForm: React.FC<IGenericFormProps> = ({
  onSubmit,
  initialValues,
  validationSchema,
  submitButtonText,
  label,
  fields
}) => (
  <Container>
    <Label>{label}</Label>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <InputContainer>
            {fields.map(field => (
              <Input
                key={field.name}
                name={field.name}
                icon={field.icon}
                type={field.type}
                placeholder={field.name}
              />
            ))}
          </InputContainer>
          <Button text={submitButtonText} type="submit" />
        </Form>
      )}
    </Formik>
  </Container>
);

export default GenericForm;
