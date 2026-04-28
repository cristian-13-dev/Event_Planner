import type {FC} from 'react'
import {days} from "@/components/Calendar/constants.ts";

const CalendarHeader: FC = () => {
  return (
    <div className="grid min-w-200 grid-cols-[80px_repeat(7,minmax(140px,1fr))] border-b border-slate-200"><div/>
      {days.map((day) => (
        <div className="border-l border-slate-200 px-3 py-3 text-center font-semibold text-slate-700" key={day}>{day}</div>
      ))}
    </div>)
}

export default CalendarHeader;