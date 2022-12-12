import { useState } from 'React'
import { Box, Typography, List, ListItem, ListItemText, useTheme } from '@mui/material'
import FullCalendar , { formatDate }from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import Header from '../../components/Header'
import { tokens } from "../../theme"


const Calendar = () => {
  // 收集所有日程展示在日历左侧
  const [currentEvents, setCurrentEvents] = useState([])
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // 日历格点击事件回调
  const handleDateClick = (selected) => {
    // console.log("Calendar", selected)
    const title = prompt("Please enter a new title for your event")
    // console.log("Calendar title", title)
    const calendarApi = selected.view.calendar
    //如果点击了对话框的确认和取消按钮，则把日历格的选择状态改为未选择状态
    calendarApi.unselect()

    //如果点击日历格，并在其中输入内容
    if (title) {
      //添加日程后，在日历格上显示该日程
      calendarApi.addEvent({
        id: selected.dataStr,
        title,
        start:selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,

      })
    }
  }


  // 删除点击的日程
  const handleEventClick = (selected) => {
    // console.log("Calendar", selected)
    console.log("Calendar", currentEvents) // [EventApi, EventApi, EventApi] 由多个EventApi组成的数组
    if (
      // 确认框必须加上window
      window.confirm(`Are you sure you want to delete the event ${selected.event.title}`)
    ) {
      selected.event.remove()
    }
  }
  return (
    <Box m="20px">
    <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
    <Box display="flex" justifyContent="space-between">
      {/* CALENDAR SIDEBAR */}
      <Box 
        flex="1 1 20%" //等价于flex="20%"
        backgroundColor={colors.primary[400]}
        p="15px"
        borderRadius="4px"
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",  
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    
                    }
                  </Typography>
                }
              />
            </ListItem>
          )

          )}
        </List>
      </Box>

      {/* 
        initialView设置默认视图：月：dayGridMonth，周：timeGridWeek，日：timeGridDay
      */}
      {/* CALENDAR */}
      <Box flex="1 1 100%" ml="15px">
        <FullCalendar
          height="75vh"
          plugins={[ 
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
           ]}
          initialView="dayGridMonth"   
          //定义日历头部内容
          headerToolbar={{
            left: "prev,next today", //逗号为紧相邻，空格为有间隙(prev,next中间不能有空格)
            center: "title", //默认显示当前年月
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth", //右侧月、周、天、list切换按钮

          }}
          //以下三个属性不知道其作用
          // editable={true}
          // selectMirror={true}
          // dayMaxEvents={true}


          // selectable 设置可以拖动、缩放
          selectable={true}
          // 选中日历格事件
          select={handleDateClick}
          // 点击日历日程事件
          eventClick={handleEventClick}
          //设置当前所有的日程
          eventsSet={(events) => setCurrentEvents(events)}
          // 设置初始化日程，会显示在对应日期的日历格上
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2022-12-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2022-12-28",
            },
          ]}
        />
      </Box>
    </Box>   
</Box>
  )
}

export default Calendar