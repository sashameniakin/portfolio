import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');

* {
    box-sizing: border-box;
   
}
html, 
body {
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;

   
}
`;

export default GlobalStyles;
