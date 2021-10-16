function AddNewUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddNewUser;
