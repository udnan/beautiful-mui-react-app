import React from 'react';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import {useTheme, Theme} from '@mui/material/styles';
import {Contact, contactData} from "../../data/contactData";

const columns = (theme: Theme) => [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => (cellValues.value)
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => (cellValues.value)
  },
  {
    field: 'skills',
    headerName: 'Skills',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => {
      return (<div style={{color: theme.palette.primary.main}}>{cellValues.value?.join(', ')}</div>)
    }
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => (cellValues.value?.format('MM/DD/YYYY'))
  },
  {
    field: 'preference',
    headerName: 'Preference',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams) => (cellValues.value)
  }
];

const ContactDataGrid = () => {
  const theme: Theme = useTheme();
  const rows: Array<Contact> = [...contactData];
  return (
    <DataGrid
      columns={columns(theme)}
      columnHeaderHeight={60}
      pageSizeOptions={[5,10,50,100]}
      rows={rows}
      rowHeight={120}
    />
  );
};

export default ContactDataGrid;
