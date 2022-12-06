import { Box, Button, useTheme} from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../../theme";
import Header from '../../components/Header'


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        {/* Header */}
        {/* 下方的<Box>如果不加alignItems="center"，右侧按钮高度将撑满整个容器 */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBORAD" subtitle="Welcom to your dashboard"/>
            {/* <Button variant="contained" startIcon={<DownloadOutlinedIcon/>}>DOWNLOAD REPORTS</Button> */}
            {/* Button标签中的字体默认大写 */}
            <Button 
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px"
                }}
            >
                <DownloadOutlinedIcon sx={{ mr: "10px" }}/>
                Download Reports
            </Button> 
        </Box>   
    </Box>
  )
}
  
export default Dashboard