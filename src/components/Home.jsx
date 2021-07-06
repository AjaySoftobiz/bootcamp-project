import React from "react";
import { useSelector } from "react-redux";
import UsersList from "./UsersList";

const Home = () => {
  const users = useSelector((state) => state.usersReducer.users);
  return (
    <div style={{display:"flex"}}>
      {users ? (
        users.map((user) => <UsersList key={user.email} user={user} />)
      ) : (
        <h1>No user found</h1>
      )}
    </div>
  );
};

export default Home;
