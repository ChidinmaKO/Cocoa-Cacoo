import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
  border: 0;
  background: #0417a8;
  color: #fff;
  font: inherit;
  font-size: 15px;
  margin-top: 20px;
  display: inline-block;
  padding: 10px 27px;
  ${props => props.theme === 'primary' && css`
    background: white;
    color: palevioletred;
  `}
`;

const Button = ({ children, theme, type }) => (
  <ButtonStyle theme={theme} type={type}>{ children }</ButtonStyle>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  type: PropTypes.string.isRequired
};

Button.defaultProps = {
  theme: ''
};

export default Button;
