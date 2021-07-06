import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../state/actions/users.action";
import { Link } from "react-router-dom";

const UsersList = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div key={user.email} className="card-small">
      <div className="card-body ">
        <h5 className="card-title  ">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{user.phone} </h6>
        <h6 className="card-subtitle mb-2 text-muted">{user.dob}</h6>
      </div>

      <button className="btn btn-secondary">
        <Link style={{ color: "white", textDecoration: "none" }} to={`/edit?email=${user.email}`}>
          Edit
        </Link>
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(deleteUser(user.email))}
      >
        Delete
      </button>
    </div>
  );
};

export default UsersList;
