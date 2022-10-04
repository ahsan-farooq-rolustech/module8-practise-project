import React, { useState } from "react";
import Card from "./../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "./../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'invalid input',
        message: 'please enter a vlaid name and age (non-empty values)'
      });
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
      setError({
        title:'invalid age',
        message: 'please enter a valid age >0'
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const errorHandler=()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
