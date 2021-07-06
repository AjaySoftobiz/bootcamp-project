import React from "react";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteUser } from "../state/actions/users.action";
import { Link } from "react-router-dom";

const UsersList = ({ user }) => {
 
  const dispatch = useDispatch();

  const handleDelteOnClick = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Do You really want to delete this user",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteUser(user.email)),
        },
        {
          label: "No",
          onClick: () => "Not deleted",
        },
      ],
    });
  };
  return (
    <div key={user.email} className="card-small">
      <div className="card-body ">
        <h5 className="card-title  ">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{user.phone} </h6>
        <h6 className="card-subtitle mb-2 text-muted">{user.dob}</h6>
      </div>

      <button className="btn btn-secondary">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={`/edit?email=${user.email}`}
        >
          Edit
        </Link>
      </button>
      <button className="btn btn-danger" onClick={handleDelteOnClick}>
        Delete
      </button>
    </div>
  );
};

export default UsersList;
