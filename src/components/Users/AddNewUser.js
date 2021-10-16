import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddNewUser(props) {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  function usernameChangeHandler(event) {
    setUserName(event.target.value);
  }
  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter your information.",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }

    const entry = { id: Math.random().toString(), name: username, age: age };
    props.onAdd(entry);
    setUserName("");
    setAge("");
  }
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message}></ErrorModal>}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={username}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </>
  );
}
export default AddNewUser;
