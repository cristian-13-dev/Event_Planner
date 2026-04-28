import { useEffect, useState } from "react";
import {hourHeight, startHour, endHour, ONE_MINUTE, ONE_HOUR} from "@/components/Calendar/constants";


export function CurrentTimeIndicator() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, ONE_MINUTE);

    return () => clearInterval(intervalId);
  }, []);

  const minutesFromStart =
    (now.getHours() - startHour) * ONE_HOUR + now.getMinutes();

  const totalMinutes = (endHour - startHour) * ONE_HOUR;

  if (minutesFromStart < 0 || minutesFromStart > totalMinutes)
    return;

  const top = (minutesFromStart / ONE_HOUR) * hourHeight;

  return (
    <div
      className="pointer-events-none absolute left-0 right-0 z-20 flex items-center"
      style={{ top }}
    >
      <div className="h-2 w-2 rounded-full bg-orange-500" />
      <div className="h-px flex-1 bg-orange-500" />
    </div>
  );
}