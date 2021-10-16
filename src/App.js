import React, { useState } from "react";
import AddNewUser from "./components/Users/AddNewUser";
import StoredUsers from "./components/Users/StoredUsers";

function App() {
  const [submittedData, setSubmittedData] = useState([]);
  function updateSubmittedDataHandler(entry) {
    setSubmittedData((prev) => [...prev, entry]);
  }
  return (
    <div>
      <AddNewUser onAdd={updateSubmittedDataHandler}></AddNewUser>
      <StoredUsers users={submittedData}></StoredUsers>
    </div>
  );
}

export default App;
