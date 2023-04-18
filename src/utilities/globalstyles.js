import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumJangMiCe';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
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
      url("https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60%;
    min-height: 50%;
    padding: 1rem;
    background: linear-gradient(
      rgba(242, 219, 219, 0.8),
      rgba(194, 244, 247, 0.7)
    );
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
