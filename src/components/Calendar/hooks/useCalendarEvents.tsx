import { useEffect, useState } from "react";
import type { CalendarEvent } from "../types.ts";
import { getEvents } from "@/api/events";

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    async function loadEvents() {
      const data = await getEvents();
      setEvents(data ?? []);
    }

    loadEvents();
  }, []);

  return events;
}