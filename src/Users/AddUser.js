import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
  // const [enteredUsername, setenteredUsername] = useState("");
  // const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const usernameHandler = (e) => {
  //   setenteredUsername(e.target.value);
  // };
  // const ageHandler = (e) => {
  //   setenteredAge(e.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.length === 0)
      return setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
    if (+enteredAge < 1)
      return setError({
        title: "Invalid Age",
        message: "Please enter a alid age (>0)",
      });
    props.userData(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  // const addUserHandler = (e) => {
  //   e.preventDefault();
  //   const enteredName = nameInputRef.current.value;
  //   const enteredAge = ageInputRef.current.value;
  //   if (enteredUsername.trim().length === 0 || enteredAge.length === 0)
  //     return setError({
  //       title: "Invalid input",
  //       message: "Please enter a valid name and age (non-empty values)",
  //     });
  //   if (+enteredAge < 1)
  //     return setError({
  //       title: "Invalid Age",
  //       message: "Please enter a alid age (>0)",
  //     });
  //   props.userData(enteredUsername, enteredAge);

  //   setenteredAge("");
  //   setenteredUsername("");
  // };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkayHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={enteredUsername}
            // onChange={usernameHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="number"
            // onChange={ageHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
