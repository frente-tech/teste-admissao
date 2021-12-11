import React from "react";
//assets
import { LoginBackground } from "../../globalStyles";
//Components
import { LoginForm } from "../../components";
// import bg from "../../assets/BackgroundLogin.jpg";
import { svg1 } from "../../assets";

const Login = () => {
  return (
    <LoginBackground bgColor="#101522" bg={svg1}>
      <LoginForm />
    </LoginBackground>
  );
};

export default Login;
