import { Box } from '@mui/material'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
        {/* 要显示Bar Chart，其父元素即下面的Box组件必须要设置height属性值 */}
        <Box height="75vh">
          <BarChart/>
        </Box>   
    </Box>
  )
}

export default Bar