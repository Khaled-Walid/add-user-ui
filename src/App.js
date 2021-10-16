import React from "react";
import AddNewUser from "./components/Users/AddNewUser";
import StoredUsers from "./components/Users/StoredUsers";

function App() {
  return (
    <div>
      <AddNewUser></AddNewUser>
      <StoredUsers users={[]}></StoredUsers>
    </div>
  );
}

export default App;
