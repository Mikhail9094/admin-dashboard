import React from "react";
import { user } from "./const";


type A = {
  userName: string;
  email: string;
  age: number;
  dateOfBirth: string;
};

let myData: A = {
  userName: "JohnSmith",
  email: "john.smith@email.com",
  age: 20,
  dateOfBirth: "12-06-2000",
};

const CheckValidation = () => {
  let valResult = user.validate(myData, { abortEarly: false });

  return (
    <button onClick={() => console.log(valResult.error ? valResult.error : valResult)}>OK</button>
  );
};

export default CheckValidation;
