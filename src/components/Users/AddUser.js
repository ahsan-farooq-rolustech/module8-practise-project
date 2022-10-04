import React, { useState } from "react";
import Card from "./../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "./../Ui/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    /**
     * the entered age is retrieved form the input fields as a string
     * hence the data type of the enteredAge state will be string. Now
     * if we just use enteredAge<1 it would work usually because the javascript
     * automatically converts it to to number but to be on the safe side
     * we have to forced the conversion of the enteredAge state from string into a number
     * so to do that we have added a + sign before the enteredAge state as it
     * will ensure that enteredAge will always be converted into a number before
     * the comparasion is made
     */
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} className="input">
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
