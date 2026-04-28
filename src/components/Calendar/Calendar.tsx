import CalendarHeader from "@/components/Calendar/CalendarHeader.tsx";
import CalendarBody from "@/components/Calendar/CalendarBody.tsx";


export default function Calendar() {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white text-sm">
      <CalendarHeader/>
      <CalendarBody/>
    </div>
  );
}