import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Appointments,
  DayView,
  Scheduler
} from '@devexpress/dx-react-scheduler-material-ui'
import Paper from '@mui/material/Paper'

interface SchedulerProps {
  events: any[]
  currentDate: Date
}

export const SchedulerView = ({ events, currentDate }: SchedulerProps) => {
  return (
    <Paper>
      <Scheduler data={events}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={8} endDayHour={18} />
        <Appointments />
      </Scheduler>
    </Paper>
  )
}
