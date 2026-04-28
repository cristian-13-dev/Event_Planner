export function getMinutesFromCalendarStart(dateTime: string, startHour: number) {
  const date = new Date(dateTime);
  return (date.getHours() - startHour) * 60 + date.getMinutes();
}