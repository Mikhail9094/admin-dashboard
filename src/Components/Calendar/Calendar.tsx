import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export default function Calendar() {
  const [data, setData] = useState<Dayjs | null>(dayjs(new Date()));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="DD/MMMM/YYYY"
        value={data}
        onChange={(newData) => setData(newData)}
        views={["year", "month", "day"]}
        sx={{ width: 200, maxHeight: 100 }}
      />
    </LocalizationProvider>
  );
}
