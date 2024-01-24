import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%; // 1 rem = 10px; 10px/16px = 62.5%
    }
    
    body, html {
      font-family: 'Roboto', sans-serif;
      color: ${theme.colors.black};
      background-color: ${theme.colors.gray50};
    }
  `}
`;

export default GlobalStyle;
