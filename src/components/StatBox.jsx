import { Box, Typography, Button, useTheme} from '@mui/material'
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle"

const StatBox = ({ title, subtitle, progress, increase, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gridColumn="span 3"
    >
        {/* 因为外层Box设置了flex居中，下面要包一层Box，否则不会换行 */}
        <Box width="100%" m="0 30px">
            <Box
                display="flex"
                justifyContent="space-between" 
            >
                <Box>
                    { icon }
                    <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                        { title }
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                mt="2px"
            >
                <Typography variant='h5' sx={{ color: colors.greenAccent[500] }}>
                    { subtitle }
                </Typography>
                <Typography variant='h5' fontStyle="italic" sx={{ color: colors.greenAccent[600] }}>
                    { increase }
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default StatBox