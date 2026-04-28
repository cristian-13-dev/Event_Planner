import {supabase} from "../lib/supabaseClient"
import type {CalendarEvent} from "@/components/Calendar/types.ts";

export async function getEvents(): Promise<CalendarEvent[]> {
  const {data, error} = await supabase
    .from("Events")
    .select("*");

  if (error) throw error;

  return (data ?? []).map((event) => ({
    id: event.id,
    title: event.title ?? "",
    description: event.description ?? "",
    category: event.category as "online" | "offline",
    color: event.color as `#${string}`,
    startDateTime: event.startDateTime ?? "",
    endDateTime: event.endDateTime ?? "",
    organizerId: event.organizerId ?? "",
    created_at: event.created_at,
    updatedAt: event.updatedAt ?? "",
  }));
}