import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddNewUser.module.css";
import Button from "../UI/Button";

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
    console.log(username, age);
    setUserName("");
    setAge("");
  }
  return (
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
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
}
export default AddNewUser;
