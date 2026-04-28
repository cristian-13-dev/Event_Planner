import {useMemo} from "react";
import type {EventProps} from "../types";
import {getDayIndex} from "@/components/Calendar/Utils";
import CalendarEventCard from "./CalendarEventCard";
import {useCalendarEvents} from "@/components/Calendar/hooks/useCalendarEvents";

export const CalendarEvent = ({dayIndex}: EventProps) => {
  const events = useCalendarEvents();

  const dayEvents = useMemo(
    () => events.filter((event) => getDayIndex(event.startDateTime) === dayIndex),
    [events, dayIndex]
  );

  return (
    <>
      {dayEvents.map((event) => (
        <CalendarEventCard key={event.id} event={event}/>
      ))}
    </>
  );
};

export default CalendarEvent;