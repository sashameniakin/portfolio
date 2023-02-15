import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";

const theme = {
  colors: {
    main: "#151515",
    footer: "#242424",
    active: "#4EE1A0",
    mainwhite: "#FFFFFF",
    secwhite: "#D9D9D9",
  },
  tablet: "768px",
  mobile: "414px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
