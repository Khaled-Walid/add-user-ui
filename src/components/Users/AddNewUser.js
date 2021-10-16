import Card from "../UI/Card";

function AddNewUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <button type="submit">Add</button>
      </form>
    </Card>
  );
}
export default AddNewUser;
