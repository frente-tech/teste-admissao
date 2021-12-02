import React from "react";
import {
  InputContainer,
  LoginButtonContainer,
  LoginContainer,
  LoginHeader,
  LoginInput,
  LoginLine,
  LoginRegister,
  LoginTitle,
} from "./LoginForm.elements";
//assets global
import { Button } from "../../../globalStyles";
import { useHistory } from "react-router";

const LoginForm = () => {
  const history = useHistory();
  const [emailReg, setEmailReg] = React.useState<string>("");
  const [passwordReg, setPasswordReg] = React.useState<string>("");

  return (
    <LoginContainer>
      <LoginHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <LoginTitle />
        Frente Corretora
      </LoginHeader>
      <InputContainer>
        <LoginInput
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
      </InputContainer>
      <LoginButtonContainer>
        <Button primary big fontBig onClick={() => history.push("/home")}>
          Entrar
        </Button>
      </LoginButtonContainer>
      <LoginLine />
      <LoginHeader color="#fff" fontSize="2rem" fontSizeMobile="1.5rem">
        <LoginRegister />
        Cadastre-se
      </LoginHeader>
      <InputContainer>
        <h3>Informe um e-mail valido</h3>
        <LoginInput
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <h3>Informe uma senha de até 6 digitos </h3>
        <LoginInput
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
      </InputContainer>
      <LoginButtonContainer>
        <Button primary big fontBig onClick={() => history.push("/home")}>
          Cadastrar
        </Button>
      </LoginButtonContainer>
    </LoginContainer>
  );
};

export default LoginForm;
