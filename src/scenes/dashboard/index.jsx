import { Box, Button, IconButton, Typography, useTheme} from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import Header from '../../components/Header'
import StatBox from '../../components/StatBox'
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";

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
        {/* GRID & CHARTS */}
        <Box
            display="grid"
            // 指定列的大小，以及网格布局中设置列的数量
            // gridTemplateColumns="repeat(12, 1fr)"
            gridTemplateColumns="repeat(12, minmax(0, 1fr))"
            // gridTemplateRows="repeat(5, minmax(0, 1fr))" 
            gridAutoRows="140px"  //指的默认的行尺寸,定义隐式网格中的行（轨道）的大小
            gap="20px"
        >
            {/* ROW 1 */}
            {/* gridColumn属性要写在设置display="grid"的元素的直接子元素上 ，*/}
            <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
                }
            />
            <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />

          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            {/* 页面审查元素时margin和padding区域的颜色显示不同 */}
            <Box display="flex" justifyContent="space-between" mt="25px" p="0 30px">
                <Box>
                    <Typography variant="h5" fontWeight="600"color={colors.grey[100]}>Revenue Generated</Typography>
                    <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>$59,342.32</Typography>
                </Box>
                {/* 鼠标悬浮到图标按钮上时，为什么背景色是椭圆而不是圆形的？？ */}
                <IconButton>
                    <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }}/>
                </IconButton>
            </Box>
            {/* 使用nivo组件，其父元素必须要设置height属性 */}
            {/*  给margin-top赋值负数，使chart向上移动 */}
            <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true}/>
            </Box>
            
          </Box>


            

        </Box>  
    </Box>
  )
}
  
export default Dashboard