import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (e) => {
    setenteredUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setenteredAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.length === 0)
      return setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
    if (+enteredAge < 1)
      return setError({
        title: "Invalid Age",
        message: "Please enter a alid age (>0)",
      });
    props.userData(enteredUsername, enteredAge);

    setenteredAge("");
    setenteredUsername("");
  };
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
            value={enteredUsername}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="number"
            onChange={ageHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
