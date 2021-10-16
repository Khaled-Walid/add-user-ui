import { useState } from "react";
import Card from "../UI/Card";
import classes from "./StoredUsers.module.css";

function StoredUsers(props) {
  const usersList = props.users.map((entry) => {
    return (
      <li key={entry.id}>
        {entry.name}, {entry.age} years old
      </li>
    );
  });
  return (
    <Card className={classes.users}>
      <ul>{usersList}</ul>;
    </Card>
  );
}
export default StoredUsers;
