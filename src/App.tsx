import './App.scss';
import React from 'react';
import { StockDataTable } from './stock-table/StockDataTable';
import { Grid, Typography } from '@material-ui/core';
import { CustomCharts } from './stock-table/components/graph/CustomCharts';

const App = () => {
  return (
    <div className="App">
      <Typography variant={'h3'}>Stock data overview</Typography>
      <Grid container direction={'column'} spacing={3}>
        <Grid item>
          <StockDataTable />
        </Grid>
        <Grid item>
          <div style={{width: '70%', margin: '0 auto'}}> <CustomCharts/></div>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
