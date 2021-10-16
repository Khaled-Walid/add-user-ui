import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddNewUser(props) {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  function usernameChangeHandler(event) {
    setUserName(event.target.value);
  }
  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) return;
    const entry = { id: Math.random().toString(), name: username, age: age };
    props.onAdd(entry);
    setUserName("");
    setAge("");
  }
  return (
    <>
      <ErrorModal title={"hi"} message={"bye"}></ErrorModal>

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
