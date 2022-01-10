import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#282c34',
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
