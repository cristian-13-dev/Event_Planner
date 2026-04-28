import type {FC} from 'react'
import {hourHeight, totalHours} from "@/components/Calendar/constants.ts";

const HourLines: FC = () => {
  return <>
    { Array.from({length: totalHours + 1}).map((_, index) => (
        <div
          key={index}
          className="absolute left-0 right-0 border-t border-slate-100"
          style={{top: index * hourHeight}}
        />
      )) }
  </>
}

export default HourLines;