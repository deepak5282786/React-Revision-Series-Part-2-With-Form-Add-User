import React from "react";
import { Card } from "../UI/Card";
import classes from "./UserList.module.css";

export const UserList = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.userListData.length > 0
            ? props.userListData.map((userlist) => {
                return (
                  <li key={userlist.id}>
                    {userlist.username}({userlist.age} Years Old)
                  </li>
                );
              })
            : "No user found !!!"}
        </ul>
      </Card>
    </>
  );
};
