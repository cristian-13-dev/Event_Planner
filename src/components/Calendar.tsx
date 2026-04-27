type CalendarEvent = {
  id: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const startHour = 7;
const endHour = 22;
const hourHeight = 96;

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "All-Team Kickoff",
    startDateTime: "2026-05-11T09:00:00Z",
    endDateTime: "2026-05-11T10:00:00Z",
  },
  {
    id: "2",
    title: "Design Review",
    startDateTime: "2026-05-12T09:00:00Z",
    endDateTime: "2026-05-12T10:30:00Z",
  },
  {
    id: "3",
    title: "Lunch",
    startDateTime: "2026-05-12T12:00:00Z",
    endDateTime: "2026-05-12T12:30:00Z",
  },
  {
    id: "4",
    title: "Happy Hour",
    startDateTime: "2026-05-14T16:00:00Z",
    endDateTime: "2026-05-14T17:00:00Z",
  },
];

function getMinutesFromCalendarStart(dateTime: string) {
  const date = new Date(dateTime);
  return (date.getHours() - startHour) * 60 + date.getMinutes();
}

function getDayIndex(dateTime: string) {
  const date = new Date(dateTime);
  return (date.getDay() + 6) % 7;
}

function formatTime(dateTime: string) {
  return new Date(dateTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Calendar() {
  const totalHours = endHour - startHour;
  const bodyHeight = totalHours * hourHeight;

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white text-sm">
      {/* Header */}
      <div className="grid min-w-200 grid-cols-[80px_repeat(7,minmax(140px,1fr))] border-b border-slate-200">
        <div />

        {days.map((day) => (
          <div
            key={day}
            className="border-l border-slate-200 px-3 py-3 text-center font-semibold text-slate-700"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Body */}
      <div
        className="relative grid min-w-200 grid-cols-[80px_repeat(7,minmax(140px,1fr))]"
        style={{ height: bodyHeight }}
      >
        {/* Time column */}
        <div className="relative border-r border-slate-200 bg-white">
          {Array.from({ length: totalHours + 1 }).map((_, index) => {
            const hour = startHour + index;

            return (
              <div
                key={hour}
                className="absolute right-3 -translate-y-1/2 text-xs text-slate-400"
                style={{ top: index * hourHeight }}
              >
                {hour}:00
              </div>
            );
          })}
        </div>

        {/* Day columns */}
        {days.map((day, dayIndex) => (
          <div key={day} className="relative border-l border-slate-200">
            {/* Hour lines */}
            {Array.from({ length: totalHours + 1 }).map((_, index) => (
              <div
                key={index}
                className="absolute left-0 right-0 border-t border-slate-100"
                style={{ top: index * hourHeight }}
              />
            ))}

            {/* Events */}
            {events
              .filter((event) => getDayIndex(event.startDateTime) === dayIndex)
              .map((event) => {
                const startMinutes = getMinutesFromCalendarStart(
                  event.startDateTime,
                );
                const endMinutes = getMinutesFromCalendarStart(
                  event.endDateTime,
                );

                const top = (startMinutes / 60) * hourHeight;
                const height = ((endMinutes - startMinutes) / 60) * hourHeight;

                return (
                  <div
                    key={event.id}
                    className="absolute left-1 right-1 overflow-hidden rounded-md border-l-4 border-sky-500 bg-sky-100 px-2 py-1 text-xs shadow-sm"
                    style={{ top, height }}
                  >
                    <div className="font-semibold text-sky-700">
                      {formatTime(event.startDateTime)}
                    </div>

                    <div className="line-clamp-2 font-medium text-slate-700">
                      {event.title}
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}