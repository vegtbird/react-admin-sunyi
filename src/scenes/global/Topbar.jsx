import {useContext} from 'react'
import { Box, InputBase, IconButton, useTheme} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { tokens, ColorModeContext } from "../../theme"

const Topbar = () => {
  // 通过theme.palette拿到当前mode:"dark" or "light", 在去tokens中取对应主题模式的色板代码
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
      // <Box>中的p属性？ 对应的是内边距padding:1代表8px??
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        {/* 这里设置flex的作用？？ */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          {/* InputBase输入框默认样式少，可添加属性更改样式 
          sx中的m1和flex属性的作用？ ml:margin-left:16px
          */}
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search'/>
          <IconButton> 
            <SearchIcon />
          </IconButton>
        </Box>
        {/* ICONS */}
        <Box>
          <IconButton onClick={colorMode.toggleColorMode}>
            {/* 这里的<DarkModeOutlinedIcon />为什么要用()包上？？ */}
            { theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutLinedIcon />}
          </IconButton>
          <IconButton> 
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton> 
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton> 
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
  )
}

export default Topbar