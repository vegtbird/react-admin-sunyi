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
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from '../../components/ProgressCircle';

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

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            {/* 下面Box设置和不设置flex的区别？？静态样式看着一样 */}
            <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]}>
                <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Recent Transactions</Typography>
            </Box>
            { mockTransactions.map((transaction, i) => (
                    // 列表遍历必须要设置key属性
                    <Box 
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p="15px" 
                        borderBottom={`4px solid ${colors.primary[500]}`} 
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.greenAccent[500]}>{transaction.txId}</Typography>
                            {/* Typography variant默认值为？？ 设置为h6后样式有变化 */}
                            <Typography color={colors.grey[100]}>{transaction.user}</Typography>
                        </Box>
                        {/* Box标签体内容直接嵌套字符串和嵌套Typography的区别？？ 首选直接嵌套字符串？？*/}
                        <Box>
                            <Typography color={colors.grey[100]}>{transaction.date}</Typography>
                        </Box>
                        <Box>
                            <Typography 
                                sx={{
                                    backgroundColor:colors.greenAccent[500],
                                    p:"5px 10px",
                                    borderRadius:"4px"
                                }}
                            >
                            {`$${transaction.cost}` }
                            </Typography>
                        </Box>
                    </Box>
                )
            )
            }


            
          </Box>

          {/* ROW 3 */}
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Campaign</Typography>
            {/*  flexDirection="column"将主轴修改为纵轴，并让子元素垂直显示。如果想让子元素水平居中，需设置alignItems属性为center */}
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
            >
                <ProgressCircle size="125"/>
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt:"15px"}}>$48,352 revenue generated</Typography>
                <Typography>Includes extra misc expenditures and costs</Typography>
            </Box>
            
            
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Typography 
                variant="h5" 
                fontWeight="600" 
                sx={{ p:"30px 30px 0 30px" }}
            >
                Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
                <BarChart isDashboard={true}/>
            </Box>  
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography 
                variant="h5" 
                fontWeight="600" 
                sx={{ mb:"15px" }}
            >
                Geography Based Traffic
            </Typography>
            <Box height="200px">
                <GeographyChart isDashboard={true}/>
            </Box>  
          </Box>




        </Box>  
    </Box>
  )
}
  
export default Dashboard