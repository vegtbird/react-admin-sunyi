import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
        // 为什么直接写成Box的属性设置样式，不生效？？ 必须要在sx中设置？？
        // background={`conic-gradient(#fff 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg)`}
        width={`${size}px`}
        height={`${size}px`}
        borderRadius="50%"
        sx={{
            
            // background:conic-gradient(green 0 25%, #B5838D 25%, #B5838D), //不生效？？
            // conic-gradient()中的过渡点可以指定弧度 xx deg或百分比 xx %
            background:`radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent ${progress*100}%, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        }}
    >

    </Box>
  )
}

export default ProgressCircle