import { TableCell, TableRow } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '60%',
      margin: '0 auto',
      marginTop: '20px',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 800,
      overflow:'hidden',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    soxTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      marginLeft: '12%',
      fontFamily: 'Equinor'
    },
    checkBoxLabel:{
      fontSize: '14px',
      fontFamily: 'Equinor'
    },
  }),
);

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      fontFamily: 'Equinor'
    },
  }),
)(TableCell);

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        fontFamily: 'Equinor'
      },
    },
  }),
)(TableRow);