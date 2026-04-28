import './App.css'
import Calendar from "./components/Calendar/Calendar";
import {getEvents} from "@/api/events.ts";

export default function App() {
  const events = getEvents();
  console.log(events);

  return <div>
    <Calendar/>
  </div>
}