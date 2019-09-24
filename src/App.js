import React from 'react';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from './utils/theme'

// Components
import Login from './screens/login';

export const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
