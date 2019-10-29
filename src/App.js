import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainTheme from "./styles/MainTheme";
import GlobalStyle from "./styles/style";
import GradientWrapper from "./components/GradientWrapper/GradientWrapper";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <GradientWrapper>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </GradientWrapper>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
