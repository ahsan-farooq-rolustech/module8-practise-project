import React from "react";
import Card from "../Ui/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <Card className={classes.users}>
            <ul>
              <li>
                {user.name} ({user.age} years old)
              </li>
            </ul>
          </Card>
        );
      })}
    </ul>
  );
};

export default UsersList;
