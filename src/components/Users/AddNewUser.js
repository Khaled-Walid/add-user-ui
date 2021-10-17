import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddNewUser(props) {
  const nameRef = useRef();
  const ageRef = useRef();

  // const [username, setUserName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // function usernameChangeHandler(event) {
  //   setUserName(event.target.value);
  // }
  // function ageChangeHandler(event) {
  //   setAge(event.target.value);
  // }

  function addUserHandler(event) {
    event.preventDefault();
    const username = nameRef.current.value;
    const age = ageRef.current.value;

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
    // setUserName("");
    // setAge("");
    nameRef.current.value = "";
    ageRef.current.value = "";
  }

  function errorHandler() {
    setError(null);
  }
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirmError={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={username}
            ref={nameRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={age}
            ref={ageRef}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </>
  );
}
export default AddNewUser;
