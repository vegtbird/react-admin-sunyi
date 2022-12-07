import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header'
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5},
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      //给某列元素加class属性，用于更改样式
      cellClassName: "name-column--cell",
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: ( params ) => {
          // console.log("renderCell接收参数", params)
          return (
            <Typography color={colors.greenAccent[500]}>
              ${params.row.cost}
            </Typography>
          )
      }  
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },  
  ] 
  return (
    <Box m="20px">
        <Header title="CONTACTS" subtitle="List of Contacts for Future Reference"/>
        <Box 
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: colors.blueAccent[700],
              borderTop: "none",
            },
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}/>
        </Box>   
    </Box>
  )
}

export default Invoices