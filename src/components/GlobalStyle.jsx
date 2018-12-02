import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: #f3f4f8;
    color: #656565;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export default GlobalStyle;
