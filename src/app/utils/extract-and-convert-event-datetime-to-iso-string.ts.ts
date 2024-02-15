const extractAndConvertEventDateToISOString = (eventDatetime: string) => {
  const [dateStr] = eventDatetime.split(" , ");
  const eventDate = new Date(dateStr);
  const [isoDate] = eventDate.toISOString().split("T");

  return isoDate;
};

export default extractAndConvertEventDateToISOString;
