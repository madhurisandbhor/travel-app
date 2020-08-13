import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import Header from './components/Header/Index';
import NotFound from './components/NotFoundPage';
import Dashboard from './containers/Dashboard/Index';
import Continent from './containers/Continent/Index';

export const MyContext = createContext();

function App() {
  const initState = {
    continentSelected: '',
  };

  const [localState, setLocalState] = useState(initState);
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MyContext.Provider value={{ localState, setLocalState }}>
            <Router>
              <div className="app">
                <Header />
                <div className="app-body">
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/continents/:continent' component={Continent} />
                    <Route path='' component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Router>
          </MyContext.Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
