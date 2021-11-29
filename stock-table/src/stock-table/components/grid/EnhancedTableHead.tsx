import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';
import React from 'react';
import { Data } from '../../data/useCreateData';
import { useStyles } from './GridStyles';


export type Order = 'asc' | 'desc';

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
  }
  
const headCells: HeadCell[] = [
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'open', numeric: true,disablePadding: false, label: 'Open' },
  { id: 'high', numeric: true, disablePadding: false, label: 'High' },
  { id: 'low', numeric: true, disablePadding: false, label: 'Low' },
  { id: 'close', numeric: true, disablePadding: false, label: 'Close' },
  { id: 'volume', numeric: true, disablePadding: false, label: 'Volume' },
  { id: 'adjusted', numeric: true, disablePadding: false, label: 'Adjusted' },
];
  
  interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  
export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  
  
  return (
    <TableHead className={'table-header'}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            className={'table-header-cell'}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <b>{headCell.label}</b>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
  
  