import React from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";

import LoginForm from "../pages/Login";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="header-top">
        <Logo src={logo} alt="logo" className="logo" />
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
};

export default Login;

// Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
