import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import MainTheme from "./styles/MainTheme";
import GlobalStyle from "./styles/style";
import GradientWrapper from "./components/GradientWrapper/GradientWrapper";
import HomePage from "./pages/HomePage";
import CurrencyRatePage from "./pages/CurrencyRatePage";
import { store } from "./store/configureStore";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={MainTheme}>
        <React.Fragment>
          <GlobalStyle font={MainTheme.fontFamily} />
          <BrowserRouter>
            <GradientWrapper>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/currency-rate" component={CurrencyRatePage} />
              </Switch>
            </GradientWrapper>
          </BrowserRouter>
        </React.Fragment>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
