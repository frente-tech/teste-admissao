import styled from "styled-components";

import { AiOutlineUserAdd } from "react-icons/ai";
//interface
interface OperationFormHeaderProps {
  fontSize: string;
  fontSizeMobile: string;
}

interface OperationInputContainerProps {
  flexDirection: string;
}

export const OperationFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 0px;
  background: #101522;

  @media screen and (max-width: 960px) {
  }
`;

export const OperationFormHeader = styled.div<OperationFormHeaderProps>`
  color: ${(props) => props.color};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 960px) {
    margin-top: 10px;
    font-size: ${(props) => props.fontSizeMobile};
  }
`;

export const OperationFormTitle = styled(AiOutlineUserAdd)`
  margin-right: 0.5rem;
  font-size: 3rem;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const OperationInputContainer = styled.div<OperationInputContainerProps>`
  display: flex;
  text-align: left;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: start;
  align-items: flex-start;
  margin: 20px auto;
  width: 40%;
  h1,
  h2,
  h3,
  h4 {
    color: white;
    font-weight: 100;
  }
`;
export const OperationFormSubmit = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  h1,
  h2,
  h3,
  h4 {
    color: white;
    font-weight: 100;
  }
`;
export const OperationInput = styled.input`
  background: #fff;
  border-radius: 1rem;
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin: 10px 0px;
  font-size: 1rem;
  border: none;
  outline: none;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #4b59f7;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #cccc;
  }
  @media screen and (max-width: 960px) {
    height: 2.5rem;
  }
`;
export const OperationSelect = styled.select`
  background: #fff;
  border-radius: 1rem;
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  margin: 10px 0px;
  font-size: 1rem;
  border: none;
  outline: none;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #4b59f7;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #cccc;
  }
  @media screen and (max-width: 960px) {
    height: 2.5rem;
  }
`;
