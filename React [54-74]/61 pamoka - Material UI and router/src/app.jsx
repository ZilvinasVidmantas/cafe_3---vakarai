import React from 'react';
import Navbar from './components/navbar';
import MugCard from './components/card';
import { Grid } from '@mui/material';


const App = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><MugCard /></Grid>
      </Grid>
    </>
  );
}

export default App;
