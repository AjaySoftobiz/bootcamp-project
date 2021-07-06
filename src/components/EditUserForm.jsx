import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../state/actions/users.action";

const EditUserForm = ({ location, history }) => {
  const { register, handleSubmit } = useForm();
  const userEmail = location.search.split("=")[1];
  const { users } = useSelector((state) => state.usersReducer);
  const user = users.find((user) => user.email === userEmail);
  const dispatch = useDispatch();

  console.log(user.dob)

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="col-md-6">
        <label>Name</label>
        <input
          defaultValue={user.name}
          type="text"
          className="form-control"
          {...register("name")}
        />
      </div>
      <div className="col-md-6">
        <label>Email</label>
        <input
          defaultValue={user.email}
          type="email"
          className="form-control"
          {...register("email")}
        />
      </div>

      <div className="col-md-6">
        <label>Phone</label>
        <input
          defaultValue={user.phone}
          type="phone"
          className="form-control"
          {...register("phone")}
        />
      </div>

      <div className="col-md-6">
        <label>DOB</label>
        <input
          defaultValue={user.dob}
          type="date"
          className="form-control"
          {...register("dob")}
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary mt-2">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
