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
    border-radius: 5px
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: no-repeat center/cover
      url("https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  }

  #root {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 70vw;
    height: 70vh;
    padding: 1rem 20%;
    background: linear-gradient(
      rgba(242, 219, 219, 0.8),
      rgba(194, 244, 247, 0.8)
    );
    border-radius: 10px;
  }
`;

export default GlobalStyle;
