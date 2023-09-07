import style from "./dates.module.scss";
import { calendarDays } from "../constants";
import { isSameDay, parse } from "date-fns";
import Header from "../Header/Header";

function Dates() {
  const styleDivWithDate = (d:number, m: number, y: number) =>
    isSameDay(parse(`${d}-${m + 1}-${y}`, "d-M-yyyy", new Date()), new Date())
      ? style.today
      : style.date;

  return (
    <div>
      <div className={style.calendar}>
        <Header />
        {calendarDays.map((item) => (
          <div
            key={item.id}
            className={styleDivWithDate(item.day, item.month, item.year)}
            onClick={() => console.log(item.day)}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dates;
