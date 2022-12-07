import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header'
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5},
    {
      field: 'registrarId',
      headerName: 'Registrar Id',
      type: 'number',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      //给某列元素加class属性，用于更改样式
      cellClassName: "name-column--cell",
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: "left",
      align: "left",
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
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
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
            // 为什么不设置这个，不显示工具箱？？即color和背景色相同。注意样式选择器的写法.MuiDataGrid-toolbarContainer .MuiButton-text
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: colors.grey[100],
            },
          }}
        >
          <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }}/>
        </Box>   
    </Box>
  )
}
export default Contacts