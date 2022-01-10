import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#282c34',
    direction: 'rtl',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    fontFamily: 'Secular One, sans-serif',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      my react project
    </div>
  )
}

export default App;
