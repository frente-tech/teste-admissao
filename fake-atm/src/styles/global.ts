import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, select, button {

    background: ${props => props.theme.colors.white};
    color:  ${props => props.theme.colors.gray};

    font: 400 1rem "Roboto", sans-serif;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    color:inherit ;
    text-decoration: none;
  }
`;
