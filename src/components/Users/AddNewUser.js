import Card from "../UI/Card";
import classes from "./AddNewUser.module.css";
import Button from "../UI/Button";

function AddNewUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
}
export default AddNewUser;
