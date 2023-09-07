import { FC } from "react";
import style from "./calendar.module.scss";
import Dates from "./Dates/Dates";

function Calendar (): JSX.Element {
 
  return (
    <div className={style.main}>
      <label>
        Введите или выберите дату: <pre />
        <input type="text" className={style.input}></input>
      </label>
      
      <Dates />
    </div>
  );
}

export default Calendar;
