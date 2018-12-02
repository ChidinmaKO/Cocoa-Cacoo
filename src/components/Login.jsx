import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const requiredInput = true;

const LoginPage = styled.div`
  width: 350px;
  margin: 200px auto;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  padding: 20px 20px 45px;
  h4 {
    margin: 15px 0;
  }
  label {
    display: block;
    margin: 20px 0 5px 0;
  }
  input {
    transition: border 0.30s ease-in-out, box-shadow 0.30s ease-in-out;
    width: 100%;
    border: 1px solid #dddddd;
    outline: none;
    height: 35px;
    padding: 0 10px;
    &:focus {
      border: 1px solid #0417a8;
      box-shadow: 0 0 3px rgba(4, 23, 168, 0.5);
    }
  }
`;

const Login = () => (
  <React.Fragment>
    <LoginPage>
      <h4>Sign in with Cacoo</h4>
      <form>
        <label htmlFor="myemail">E-mail Address</label>
        <input id="myemail" type="email" name="email" placeholder="name@gmail.com" required={requiredInput} />
        <label htmlFor="mypassword">Password</label>
        <input id="mypassword" type="password" name="psw" placeholder="password" required={requiredInput} />
        <Button type="submit">Sign In</Button>
      </form>
    </LoginPage>
  </React.Fragment>
);

export default Login;
