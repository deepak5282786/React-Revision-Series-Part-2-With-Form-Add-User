import React, { useState } from "react";
import { AddUser } from "./Users/AddUser";
import { UserList } from "./Users/UserList";

function App() {
  const [userListData, setUserListData] = useState([]);
  const handleUserData = (username, age) => {
    setUserListData((prevUserData) => {
      return [
        ...prevUserData,
        { username: username, age: age, id: Math.random() },
      ];
    });
  };
  return (
    <div>
      <AddUser userData={handleUserData} />
      <UserList userListData={userListData} />
    </div>
  );
}

export default App;
