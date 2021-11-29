import { TableFooter, TablePagination, TableRow } from '@material-ui/core';
import React from 'react';
import { Data } from '../../data/useCreateData';
import { CustomPaginationActions } from './CustomPaginationActions';

interface IProps {
    rows: Data[];
    rowsPerPage: number;
    page: number;
    handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void; 
    handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}
export const CustomTablePagination = (props: IProps) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={6}
          count={props.rows.length}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onPageChange={props.handleChangePage}
          onRowsPerPageChange={props.handleChangeRowsPerPage}
          ActionsComponent={CustomPaginationActions}
          className={'custom-pagination'}
        />
      </TableRow>
    </TableFooter>
  );
};