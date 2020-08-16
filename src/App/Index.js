import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import AppHeader from '../containers/AppHeader/Index';
import NotFound from '../components/NotFoundPage';
import Dashboard from '../containers/Dashboard/Index';
import Continent from '../containers/Continent/Index';
import { InfoProvider } from './InfoContext';
import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <InfoProvider>
            <Router>
              <div className="app">
                <AppHeader />
                <div className="app-body">
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/continents/:continent' component={Continent} />
                    <Route path='' component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Router>
          </InfoProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
