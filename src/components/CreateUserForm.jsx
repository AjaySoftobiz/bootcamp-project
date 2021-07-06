import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../state/actions/users.action";

const CreateUserForm = ({history}) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data));
    history.push('/')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="col-md-6">
        <label>Name</label>
        <input type="text" className="form-control" {...register("name")} />
      </div>
      <div className="col-md-6">
        <label>Email</label>
        <input type="email" className="form-control" {...register("email")} />
      </div>

      <div className="col-md-6">
        <label>Phone</label>
        <input type="phone" className="form-control" {...register("phone")} />
      </div>

      <div className="col-md-6">
        <label>DOB</label>
        <input type="date" className="form-control" {...register("dob")} />
      </div>

      <div>
        <button type="submit" className="btn btn-primary mt-2">
          Add User
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
