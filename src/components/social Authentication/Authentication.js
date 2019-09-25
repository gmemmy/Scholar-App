import React, { Component, Fragment } from 'react';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';

// Social Icons
import twitter from '../../assets/social-icons/twitter.png';
import facebook from '../../assets/social-icons/facebook.png';
import googlePlus from '../../assets/social-icons/google-plus.png';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
  authGrid: {
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
  authPaper: {
    height: 79.78,
    width: 440.51,
    marginLeft: 900,
    borderRadius: 8,
  },
  socialText: {
    fontFamily: 'Abel',
    fontWeight: 'normal',
    fontSize: 14,
    top: 25,
    right: 80,
    position: 'absolute',
    color: 'white',
  },
  authText: {
    fontWeight: 'normal',
    fontSize: 14,
    float: 'left',
    marginLeft: 30,
    marginTop: 30,
  },
  socialIcons: {
    float: 'left',
    marginLeft: 20,
    marginTop: 20
  }
})

class Authentication extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="h3" className={classes.header}>
          Log into your account
        </Typography>
        <Grid container spacing={5} className={classes.socialGrid}>
          <Grid item xs={2}>
            <Paper className={classes.socialPaper} style={{ background: '#507CC0' }}>
              <img src={facebook} alt="facebook_icon" style={styles.socialIcons} />
              <Typography className={classes.socialText}>Login with Facebook</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.socialPaper} style={{ background: '#64CCF1' }}>
              <img src={twitter} alt="twitter_icon" style={styles.socialIcons} />
              <Typography className={classes.socialText}>Login with Twitter</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.socialPaper} style={{ background: '#DF4930' }}>
              <img src={googlePlus} alt="google_plus" style={styles.socialIcons} />
              <Typography className={classes.socialText}>Login with Google+</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.authGrid}>
          <Grid item sm={6}>
            <Paper className={classes.authPaper} style={{ background: '#DADADA' }}>
              <Typography className={classes.authText}>Username or email</Typography>
            </Paper>
          </Grid>
          <Grid item sm={6}>
            <Paper className={classes.authPaper} style={{ background: '#DADADA' }}>
              <Typography className={classes.authText}>Password</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Authentication);