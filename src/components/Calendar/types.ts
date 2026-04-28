export type CalendarEvent = {
  id: string;
  title: string;
  description: string | null;
  category: "online" | "offline";
  startDateTime: string;
  endDateTime: string;
  organizerId: string;
  color: `#${string}`;
  created_at: string;
  updatedAt: string;
};

export type CalendarEventCardProps = {
  event: CalendarEvent;
};

export type EventProps = {
  dayIndex: number;
};