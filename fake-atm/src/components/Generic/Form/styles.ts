import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 720px) {
    width: 50vw;
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: 0;
`;

export const Label = styled.text`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
`;
