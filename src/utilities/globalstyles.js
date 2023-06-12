import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumJangMiCe';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
    word-break: keep-all;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-width: 360px;
    height: 100vh;
    background: no-repeat center/cover
      url("https://images.unsplash.com/photo-1516564927920-18dc97b117b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60%;
    height: 50%;
    padding: 1rem;
    background-color: rgba(192,168,152,0.5);
    border-radius: 10px;
  }

  button {
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    :disabled {
      cursor: not-allowed;;
    }
  }

  input[type=text], input[type=password] {
    border: none;
    border-radius: 5px;
    padding: 1px 0.5rem;
  }
`;

export default GlobalStyle;
