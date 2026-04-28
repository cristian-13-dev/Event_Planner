import {ONE_HOUR} from "@/components/Calendar/constants.ts";

export function getMinutesFromCalendarStart(dateTime: string, startHour: number) {
  const date = new Date(dateTime);
  return (date.getHours() - startHour) * ONE_HOUR + date.getMinutes();
}