import type {FC} from 'react'
import {hourHeight, startHour, totalHours} from "@/components/Calendar/constants.ts";

export const TimeColumn: FC = () => {
  return (
    <div className="relative border-r border-slate-200 bg-white">
      {Array.from({length: totalHours + 1}).map((_, index) => {
        const hour = startHour + index;

        return (
          <div className={`absolute right-3 -translate-y-1/2 text-xs text-slate-400 top-[${index * hourHeight}]`}
               style={{top: index * hourHeight}}
               key={hour}
          >
            {hour}:00
          </div>
        );
      })}
    </div>
  )
}

export default TimeColumn