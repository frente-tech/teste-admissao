import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const CustomInput = ({
  id,
  label,
  errors,
  inputCfg,
  register,
}) => (
  <FormControl isInvalid={ errors?.[id] }>
    <FormLabel htmlFor={ id }>{label}</FormLabel>
    <Input id={ id } { ...register(id) } { ...inputCfg } />
    <FormErrorMessage>{errors?.[id]?.message}</FormErrorMessage>
  </FormControl>
);

export default CustomInput;
