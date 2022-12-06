import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from '../../components/Header'
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // 如果想直接显示rows中的属性值，colums中的field属性值必须和rows中的属性一一对应
  // 如果需要对rows中的属性值进行加工
  // 目测如果每列不指定width,默认为100px。如果各项设置flex: 1，则几项平分剩余的宽度
  // headerAlign和 align设置标题栏和单元格的对齐方式
  const columns = [
    { field: 'id', headerName: 'ID'},
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
      headerAlign: 'left',
      align: 'left',
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
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      //这里接收的参数是什么？？
      renderCell: ({ row: { access } }) => {
        return (
          //样式！！！
          // justifyContent="center" 让图标和文字居中显示
          // m="0 auto" 让整体在单元格居中
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={ 
              access === "admin" 
                ? colors.greenAccent[600] 
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
              }
            borderRadius="4px"
          >
            {/* 为什么这里不用Button组件？？--- Button组件中的字体均为大写，去掉该设置比较麻烦？？ 此处也不是按钮，只是样式设置相似 */}
              {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}> { access } </Typography>
          </Box>
        )
      }

    },
  ] 
  return (
    <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members"/>
        {/* 
        <DataGrid> 外层元素必须要有高度/height属性
        75vh：vh是什么单位？ --viewport height vh：视窗高度的百分比（ 1vh 代表视窗的高度为 1%）
        */}
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
            //使用该元素上的不同class属性都能生效(复选框) 但是用.MuiButtonBase-root会影响到其它组件中的Button，所以使用复选框
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            //加上之后效果与示例不同？？？
            // "& .MuiDataGrid-cell": {
            //   borderBottom: "none",
            // },
            //给Name列自行增加的class，单独设置样式
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            // 设置表格除去header和footer部分的背景色
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns}/>
        </Box>   
    </Box>
  )
}

export default Team