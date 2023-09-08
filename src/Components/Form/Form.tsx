import { ChangeEvent, FormEvent, useState } from "react";
import { text } from "stream/consumers";

interface FormValues {
  name: string;
  age: number;
  email: string;
}

interface Errors {
  name: string;
  age: string;
  email: string;
}

export default function Form() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    age: 0,
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const validate = (values: FormValues) => {
    const errors: Partial<Errors> = {};
    if (!values.name) {
      errors.name = "Нужно имя";
    } else if (values.age >= 5) {
      errors.age = "Укажите возраст меньше 5";
    }
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = validate(values);

    if (Object.keys(errors).length === 0) {
      console.log("ok");
    } else {
      console.log(errors);
    }
  };

  const onChanch = (e: {
    [x: string]: any; preventDefault: () => void; dataTransfer: any; 
}) => {
    e.preventDefault();
    setValues({
      name: e.dataTransfer.getData('text'),
      age: 0,
      email: "",
    }   
      )
      console.log(e.dataTransfer)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
        id="target"
          onDragEnter={onChanch}
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={values.age} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={values.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
