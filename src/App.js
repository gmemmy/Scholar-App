import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from './utils/theme'

// Components
import Navbar from './components/Navbar';
import Login from './screens/login';
import SignUp from './screens/signup';

export const theme = createMuiTheme(themeFile);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
