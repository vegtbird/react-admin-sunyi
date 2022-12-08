import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Typography, Box, useTheme, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useState } from "react";


// 封装Item菜单项，实现路由链接、
const Item = ({ title, icon, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active={selected === title} style={{ color: colors.grey[100] }} icon={icon} onClick={() => setSelected(title)}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //这里用于表示选中的菜单项，实现高亮效果active
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    // sidebar适配主题颜色部分，暂未深究
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          {/* 这里能否将 MenuItem替换为其它组件？？  */}
          {/* 有没有更好的折叠菜单时显示MenuOut图标的方案 */}
          <MenuItem icon={ isCollapsed ? <MenuOutlinedIcon/> : undefined} onClick={() => setIsCollapsed(!isCollapsed)} style={{margin: "10px 0 20px 0",color: colors.grey[100]}}>
            {/* 如果只用<Box>部分(不设置<MenuItem>上的图标属性)，当点击MenuOut图标后菜单隐藏， MenuOut图标不会显示，只能显示一点文字部分*/}
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          { !isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* 把头像图片放在src/assets下，图片加载失败 ，why???
                  src={`../../assets/user.png`} 不可以
                  src={require('../../assets/user.png') 这种可以(通过require引入)
                  import avatar from '../../assets/user.png' src={avatar} 这种也可以(通过import引入)

                  在 React 项目中，assets 文件夹通常放在 public 文件夹中，防止webpack打包时出现不显示图片的问题
                  src={`/assets/user.png`}或者src={`../../assets/user.png`} 都可以显示图像
                  src={`/assets/user.png`} 以 public 文件夹为根目录
                  src={`../../assets/user.png`} 为什么这个可以？找到了src目录下的assets?
                */}
                <img 
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`/assets/user.png`}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Ed Roh</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
              </Box>

              
            </Box>
          )}



          {/* 菜单子项用MenuItem和Item的区别: Item是自己封装的组件 */}
          <Box paddingLeft={ isCollapsed ? undefined : "10%"}>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />}  selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.primary[300]} sx={{ m: "15px 0 5px 20px"}}>Data</Typography>
            <Item title="Mange Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.primary[300]} sx={{ m: "15px 0 5px 20px"}}>Pages</Typography>
            <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.primary[300]} sx={{ m: "15px 0 5px 20px"}}>Charts</Typography>
            <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected}/>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
