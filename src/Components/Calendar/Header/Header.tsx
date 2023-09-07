import { useState } from "react";
import { todayMonth, todayYear } from "../constants";
import style from "./header.module.scss";

const Header = () => {
  const [year, setYear] = useState(todayYear);
  const [month, setMonth] = useState(todayMonth);

  return (
    <div className={style.header}>
      <button type="button" className={style.subYear}>{'<'}</button>
      <button type="button" className={style.subMonth}>{'<<'}</button>
      <button type="button">{month}</button>
      <button type="button">{year}</button>
      <button type="button" className={style.addMonth}>{'>>'}</button>
      <button type="button" className={style.addYear}>{'>'}</button>
    </div>
  );
};

export default Header;
