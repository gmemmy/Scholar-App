import React, { Component } from 'react';

// MUI Stuff
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({
  form: {
    textAlign: 'center',
    background: '#C3C0C0',
  }
})

class SignupForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined">
            Fullname
          </TextField>
      </form>
    )
  }
}

export default withStyles(styles)(SignupForm);