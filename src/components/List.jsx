import React from 'react';
import styled, { css } from 'styled-components';


const List = styled.ul`
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  li {
    background: #ffffff;
    border: solid thin #bbb;
    border-bottom: 0;
    ${props => props.padded && css`padding: 20px`}
    &:last-of-type{
      border-bottom: solid thin #bbb;
    }
  }
  summary {
    padding: 10px 20px;
    &::-webkit-details-marker{
      display: none;
    }
    &:focus{
      outline: solid thin #aaa;
    }
  }
  details {
    > div {
      border-top: solid thin #bbb;
      padding: 10px;
      background: #f5f5f5;
      h4 {
        margin-top: 0;
      }
    }
  }
`;

export default List;
