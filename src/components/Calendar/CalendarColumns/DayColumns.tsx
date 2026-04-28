import {days} from "@/components/Calendar/constants.ts";

import CalendarEvent from "../CalendarEvent/CalendarEvent"
import HourLines from "./HourLines.tsx";

const DayColumns = () => {
  return (
    <>
      {days.map((day, dayIndex) => (
        <div key={day} className="relative border-l border-slate-200">
          <HourLines/>
          <CalendarEvent dayIndex={dayIndex}/>
        </div>
      ))}
    </>
  )
}

export default DayColumns;