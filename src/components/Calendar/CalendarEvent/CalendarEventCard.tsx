import type {CalendarEventCardProps} from "../types";
import {formatTime, getMinutesFromCalendarStart} from "@/components/Calendar/Utils";
import {hourHeight, startHour} from "@/components/Calendar/constants";

const CalendarEventCard = ({event}: CalendarEventCardProps) => {
  const startMinutes = getMinutesFromCalendarStart(event.startDateTime, startHour);
  const endMinutes = getMinutesFromCalendarStart(event.endDateTime, startHour);

  const top = (startMinutes / 60) * hourHeight;
  const height = ((endMinutes - startMinutes) / 60) * hourHeight;

  return (
    <div
      className="absolute left-1 right-1 overflow-hidden rounded-md border-l-4 border-sky-500 bg-sky-100 px-2 py-1 text-xs shadow-sm"
      style={{top, height}}
      key={event.id}
    >
      <div className="font-semibold text-sky-700">
        {formatTime(event.startDateTime)}
      </div>

      <h1 className="line-clamp-2 font-medium text-slate-700">
        {event.title}
      </h1>
    </div>
  );
};

export default CalendarEventCard;