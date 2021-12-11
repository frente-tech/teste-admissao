import styled from "styled-components";
//assets page
import { MdDoubleArrow, MdAddReaction } from "react-icons/md";

//interface
interface LoginLogoProps {
  color: string;
  fontSize: string;
  fontSizeMobile: string;
}

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  border-radius: 1rem;

  @media screen and (max-width: 960px) {
    height: 70vh;
    width: 80%;
  }
`;

export const LoginHeader = styled.div<LoginLogoProps>`
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

export const LoginTitle = styled(MdDoubleArrow)`
  margin-right: 0.5rem;
  font-size: 3rem;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  height: 20%;
  width: 100%;
  h1,
  h2,
  h3 {
    color: white;
    font-weight: 100;
  }
`;

export const LoginInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
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

export const LoginButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

export const LoginLine = styled.div`
  background-color: #cccc;
  align-items: center;
  justify-content: center;
  width: 86%;
  height: 0.5rem;
  border-radius: 1rem;
`;
export const LoginRegister = styled(MdAddReaction)`
  margin-right: 0.5rem;
  font-size: 3rem;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;
