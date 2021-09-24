import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import UsersList from "./UsersList";

const AddUser = () => {
  const [username, setUserName] = useState("");
  const [usersList, setUserList] = useState([]);
  const [age, setAge] = useState(21);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(username, age);
    setUserList([...usersList, { id: usersList.length, username, age }]);
    setUserName("");
    setAge(0);
  };
  //   console.log(usersList);

  /*

	Add functions here. 

	*/

  return (
    <div>
      <Card className={classes.card}>
        <form onSubmit={submitHandler} className={classes.form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button type="submit" className={classes.submit}>
            Add User
          </Button>
        </form>
      </Card>
      <UsersList users={usersList} />
    </div>
  );
};

export default AddUser;
