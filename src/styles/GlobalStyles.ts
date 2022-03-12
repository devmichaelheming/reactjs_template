import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background-color: #FFF;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #2E5D7D;
    --secondary: #262626;
    --tooltip: #67C6FC;
    --menuItem: #EAF4F9;
    --menuIcon: #4AACF8;
    --text: #8C8C8C;
  }
`;
