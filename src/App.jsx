import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    direction: 'rtl',
    backgroundColor: '#282c34',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    color: 'white'
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      my react project
    </div>
  )
}

export default App;
