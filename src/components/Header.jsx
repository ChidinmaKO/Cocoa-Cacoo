import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 1rem;
  margin-bottom: 15px;
  h1{
    margin: 0;
  }
  a{
    display: inline-block;
    margin-left: 1.5rem;
  }
`;

const Navigation = () => (
  <NavStyle>
    <h1>Manage Cacoo</h1>
    <div>
      <span>Me</span>
      <Link to="/logout">Logout</Link>
    </div>
  </NavStyle>
);

export default Navigation;
