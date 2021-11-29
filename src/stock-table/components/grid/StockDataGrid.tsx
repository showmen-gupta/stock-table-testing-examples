import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Data} from '../../data/useCreateData';
import '../../styles/StockGrid.scss';
import NumberFormat from 'react-number-format';
import { StyledTableCell, StyledTableRow, useStyles } from './GridStyles';
import { EnhancedTableHead, Order } from './EnhancedTableHead';
import { CustomTablePagination } from './CustomTablePagination';

export interface IProps {
  rows: Data[],
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const StockDataGrid = (props : IProps) => {
  const classes = useStyles();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <>
      <div className={classes.root}>        
        <Paper className={classes.paper} >
          <div>
            <Typography variant='h6' className={'title'} >
                  Stock table data
            </Typography>
          </div>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={props.rows.length}
              />
              <TableBody>
                {( rowsPerPage > 0 ? stableSort(props.rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
                  : props.rows).map((row) => {
                  return (
                    <StyledTableRow 
                      hover
                      tabIndex={-1}
                      key={row.date}
                    >
                      <StyledTableCell component="th" scope="row" padding="normal">
                        {row.date}
                      </StyledTableCell>
                      <StyledTableCell align="right">{<NumberFormat value={row.open} displayType={'text'} thousandSeparator={true} />}</StyledTableCell>
                      <StyledTableCell align="right">{<NumberFormat value={row.high} displayType={'text'} thousandSeparator={true} />}</StyledTableCell>
                      <StyledTableCell align="right">{<NumberFormat value={row.low} displayType={'text'} thousandSeparator={true} />}</StyledTableCell>
                      <StyledTableCell align="right">{<NumberFormat value={row.close} displayType={'text'} thousandSeparator={true} />}</StyledTableCell>
                      <StyledTableCell align="right">{<NumberFormat value={row.volume} displayType={'text'} thousandSeparator={true} />}</StyledTableCell>
                      <StyledTableCell align="right">{<NumberFormat value={row.adjusted} displayType={'text'} thousandSeparator={true} />}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
              <CustomTablePagination 
                rows = {props.rows} 
                rowsPerPage={rowsPerPage} 
                page={page} handleChangePage={handleChangePage} 
                handleChangeRowsPerPage={handleChangeRowsPerPage}/>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>
  );
};