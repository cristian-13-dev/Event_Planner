import {bodyHeight} from "@/components/Calendar/constants.ts";
import TimeColumn from "./CalendarColumns/TimeColumn.tsx";
import DayColumns from "./CalendarColumns/DayColumns.tsx";

const CalendarBody: React.FC = () => {
  return <div
    className={`relative grid min-w-200 grid-cols-[80px_repeat(7,minmax(140px,1fr))]`}
    style={{height: bodyHeight}}>
    <TimeColumn/>
    <DayColumns/>
  </div>
}

export default CalendarBody;