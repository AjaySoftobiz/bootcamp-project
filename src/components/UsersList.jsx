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
    <tr>
      <th>{user.name}</th>
      <th>{user.email}</th>
      <th>{user.phone}</th>
      <th>{user.dob}</th>
      <th>
        {" "}
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
      </th>
    </tr>
  );
};

export default UsersList;
