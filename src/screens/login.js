import React, { Component } from 'react';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';

// Components
import Navbar from '../components/Navbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1,
  }
})

class Login extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Navbar />
    );
  }
}

export default withStyles(styles)(Login);