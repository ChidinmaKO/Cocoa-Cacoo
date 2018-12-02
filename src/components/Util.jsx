import styled, { css } from 'styled-components';

export const FloatLeft = styled.div`
  float: left;
`;

export const FloatRight = styled.div`
  float: right;
`;

export const LineDivide = styled.div`
  display: flex;
  ${props => props.spaced && css`
    justify-content: space-between;
   `}
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 50px;
  height: 50px;
`;
