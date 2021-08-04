import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/bg.jpg'})`,

  },
}));

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
}

export default App;
