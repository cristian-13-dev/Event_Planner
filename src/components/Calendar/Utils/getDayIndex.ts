export function getDayIndex(dateTime: string) {
  const date = new Date(dateTime);
  return (date.getDay() + 6) % 7;
}