import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height:100%;
  }
  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Helvetica, sans-serif;
    border: none;
  }
  button {
    cursor: pointer;
    border: 0;
  }
  svg {
    cursor: pointer
  }
  ul {
    list-style:none;
  }
  li {
    list-style-type: none;
    text-transform: uppercase;
    font-family: 'Anton', Helvetica, Arial;
    font-size: 30px;
  }
  a {
    text-decoration:none;
  }

  ${(props): FlattenSimpleInterpolation =>
    props.theme === "dark"
      ? css`
          body {
            background-color: #444444;
            color: #fafafa;
          }
          svg {
            color: #fafafa;
          }
          ,
          p {
            color: #fafafa;
          }
          a {
            color: #fafafa;
          }
          input,
          textarea {
            color: #fff;
          }
        `
      : css`
          body {
            background-color: #f0f0f0;
            color: #272727;
          }
          ,
          svg {
            color: #272727;
          }
          p {
            color: #272727;
          }
          a {
            color: #272727;
          }
          input,
          textarea {
            width: 570px;
          }
        `}
`;
