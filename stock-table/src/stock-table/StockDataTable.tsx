import { CircularProgress} from '@equinor/eds-core-react';
import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { StockDataGrid } from './components/grid/StockDataGrid';
import { useCreateData } from './data/useCreateData';
import './styles/StockHeader.scss';

export const StockDataTable = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const {rows} = useCreateData();
  
  useEffect(() => {
    const timer = setInterval(() => {
      if(rows.length > 0) {
        setLoading(false);
      }
    }, 2000);
    return () => clearInterval(timer);
  },[rows]);

  return (
    <Grid container direction={'column'} spacing={2}>
      <Grid item>
        {loading ? <div className={'data-loader'}
        ><CircularProgress
            value={0}
            variant={'indeterminate'}
            size={48}
          /></div> : <StockDataGrid rows = {rows}/> }
      </Grid>
    </Grid>
    
  );
}; 