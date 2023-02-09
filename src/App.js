import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const theme = {
  colors: {
    main: "#151515",
    footer: "#242424",
    active: "#4EE1A0",
    mainwhite: "#FFFFFF",
    secwhite: "#D9D9D9",
  },
  tablet: "768px",
  mobile: "375px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
    </ThemeProvider>
  );
}

export default App;
