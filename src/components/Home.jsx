import React from "react";
import { useSelector } from "react-redux";
import UsersList from "./UsersList";

const Home = () => {
  const users = useSelector((state) => state.usersReducer.users);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
          <th scope="col">Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {users ? (
         users.map((user) => <UsersList key={user.email} user={user} />)
      ) : (
         <h1>No user found</h1>
    )}
      </tbody>
    </table>
  );
};

export default Home;
