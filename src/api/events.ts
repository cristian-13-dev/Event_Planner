import {supabase} from "../lib/supabaseClient"

export async function getEvents() {
  const {data, error} = await supabase
    .from("Events")
    .select("*")

  if (error) throw error;
  return data
}