import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FBLogo from "../../images/fb-logo.png";

const regexp = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

const initState = {
  checked: true,
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class LoginForm extends Component {
  state = initState;

  handlEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({ checked: e.target.checked });
  };

  validate = () => {
    let inputError = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };

    if (!this.state.email) {
      inputError = true;
      errors.emailError = "Please enter a valid email";
    } else if (!this.state.email.match(regexp)) {
      inputError = true;
      errors.emailError = <span>Your email address must be valid</span>;
    }
    if (this.state.password.length > 0) {
      inputError = true;
      errors.passwordError =
        "Your password must contain between 4 and 10 characters";
    }

    this.setState({
      ...errors,
    });
    return inputError;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const err = this.validate();
    if (!err) {
      this.setState({ initState });
    }
  };

  render() {
    return (
      <FormContainer>
        <div className="form-container">
          <form>
            <h1>Sign In</h1>
            <div className="input-container">
              <input
                onChange={this.handlEmailChange}
                className="input-empty"
                type="email"
                required
                value={this.state.email}
              />
              <label>Email or Phone Number</label>
              <span>{this.state.emailError}</span>
            </div>
            <div className="input-container">
              <input
                onChange={this.handlPasswordChange}
                className="input-empty"
                type="password"
                required
                value={this.state.password}
              />
              <label>Password</label>
              <span>{this.state.passwordError}</span>
            </div>
            <div className="input-container">
              <Button onClick={(e) => this.onSubmit(e)} type="submit">
                Sign In
              </Button>
              <label>Password</label>
            </div>
            <label className="checkbox-container">
              Remember Me
              <input
                type="checkbox"
                defaultChecked={this.state.checked}
                onChange={this.handleCheckbox}
              />
              <span className="checkmark"></span>
            </label>
            <Link to="/" className="need-help">
              Need Help?
            </Link>
            <div className="bottom-form">
              <img src={FBLogo} alt="fb" />
              <Link to="/" className="login-fb-text">
                Log In with Facebook
              </Link>
              <br />
              <br />
              <span style={{ color: "#999" }}>New to Netflix?</span>
              <Link to="/" className="sign-up-text">
                Sign Up Now
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default LoginForm;

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;

  .form-container {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 28.125rem;
    height: 41.25rem;
    padding: 4rem;
  }

  .input-container: {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.25rem;
  }

  .input-empty {
    color: #fff;
    background: #333;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
  }

  form div label {
    position: absolute;
    top: 0.625rem;
    left: 1.25rem;
    pointer-events: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }

  form div {
    position: relative;
  }

  input:focus ~ label {
    top: 0.4375rem;
    font-size: 0.7rem;
  }

  input:focus {
    outline: none;
  }

  .checkbox-container {
    margin-left: 0.75rem;
    padding-left: 1.8;
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .checkbox-container-input {
    display: none;
  }

  .checkbox-container .checkmark {
    display: inline-block;
    background: #454545;
    width: 1rem;
    height: 1.1rem;
    top: 0;
    left: 0;
    border-radius: 0.1rem;
    position: absolute;
  }

  .checkbox-container input:checked + .checkmark:after {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 0.625rem;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    top: 25%;
    left: 21%;
    transform: rotate(-45deg);
  }
  .need-help {
    text-decoration: none;
    color: #828282;
    margin-left: 6.6rem;
    font-size: 0.9rem;
  }

  .bottom-form img{
width:1.5625rem;
margin:0.625rem 0.625rem -0.4735rem 0
  }

  .login-fb-text{
      color:#828282
      font-size:0.9rem;
  }

  .bottom-form{
      position:absolute;
    bottom:0;
    margin-bottom:4rem;
  }

  .sign-up-text{
      font-size:1.1rem;
      color:#fff;
    &hover{
    text-decoration:underline;
    }
  }
`;

const Button = styled.button`
color:#fff;
background:rgba(229, 9 , 20)
border:none;
outline:none;
padding:0.8rem 1.3rem;
border-radius:.125rem;
font-size:1rem;
text-align:center;
box-shadow: 0 1px 0 rg(0,0,0,0.45)
transition:opacity .2s ease-in;
cursor:pointer;
text-decoration:none;
margin:1rem 0;
`;
