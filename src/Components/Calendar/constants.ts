import {
    addDays,
    eachDayOfInterval,
    getDate,
    setDay,
    startOfMonth,
    getMonth,
    getYear,
    format,
  } from "date-fns";
  import { ru } from "date-fns/locale";
  
  const firstDayFirstWeekOfMonth = setDay(startOfMonth(new Date()), 1, {
    weekStartsOn: 1,
  }); // первый день первой недели месяца
  const stepDays = addDays(firstDayFirstWeekOfMonth, 41);
  const daysInInterval = eachDayOfInterval({
    start: firstDayFirstWeekOfMonth,
    end: stepDays,
  });

  interface IDate {
    id: number,
    day: number,
    month: number,
    year: number,
  }
  export const calendarDays = daysInInterval.reduce((days, day, index) => {
    days.push({
      id: index,
      day: getDate(day),
      month: getMonth(day),
      year: getYear(day),
    });
    return days;
  }, [] as IDate[]);
  
  export const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  
  export const todayMonth =
    format(new Date(), "LLLL", { locale: ru }).charAt(0).toUpperCase() +
    format(new Date(), "LLLL", { locale: ru }).slice(1);
  export const todayYear = getYear(new Date());
  
  