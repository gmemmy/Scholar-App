import React, { Component, Fragment } from 'react';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';

// Social Icons
import twitter from '../assets/social-icons/twitter.png';
import facebook from '../assets/social-icons/facebook.png';
import googlePlus from '../assets/social-icons/google-plus.png';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { relative } from 'path';

const styles = ({
  root: {
    flexGrow: 1,
  },
 header: {
   color: '#212293',
   fontWeight: 'bold',
   verticalAlign: 'top',
   fontSize: 50,
   lineHeight: 4,
 },
 socialGrid: {
  display: 'flex',
  flexDirection: 'column',
 },
  socialPaper: {
    height: 68.9,
    width: 304.51,
    marginLeft: 320,
    borderRadius: 8,
    position: 'relative'
  },
  text: {
    fontFamily: 'Abel',
    fontWeight: 'normal',
    fontSize: 14,
    top: 25,
    right: 80,
    position: 'absolute',
    color: 'white',
  },
  socialIcons: {
    float: 'left',
    marginLeft: 20,
    marginTop: 20
  }
})

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
          <Typography variant="h3" className={classes.header}>
            Log into your account
        </Typography>
        <Grid container spacing={6} className={classes.socialGrid}>
          <Grid item xs={2} spacing={3}>
            <Paper className={classes.socialPaper} style={{ background: '#507CC0' }}>
              <img src={facebook} alt="facebook_icon" style={styles.socialIcons} />
              <Typography className={classes.text}>Login with Facebook</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} spacing={3}>
            <Paper className={classes.socialPaper} style={{ background: '#64CCF1' }}>
              <img src={twitter} alt="twitter_icon" style={styles.socialIcons} />
               <Typography className={classes.text}>Login with Twitter</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2} spacing={3}>
            <Paper className={classes.socialPaper} style={{ background: '#DF4930' }}>
              <img src={googlePlus} alt="google_plus" style={styles.socialIcons} />
              <Typography className={classes.text}>Login with Google+</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);