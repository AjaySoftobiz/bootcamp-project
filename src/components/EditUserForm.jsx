import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../state/actions/users.action";
import Error from './Error'

const EditUserForm = ({ location, history }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const userEmail = location.search.split("=")[1];
  const { users } = useSelector((state) => state.usersReducer);
  const user = users.find((user) => user.email === userEmail);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateUser({...data,email:userEmail}));
    
    history.push("/");
  };

  const onError = (error, e) => {
    if (error.name) {
      setError("name", { message: "name can not be empty" });
    }

    if (error.phone) {
      setError("phone", {
        message: "phone number length must be 10 character long",
      });
    }
    if (error.dob) {
      setError("dob", {
        message: "enter a valid date",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="container">
      <div className="col-md-6">
        <label>Name</label>
        <input
          defaultValue={user.name}
          type="text"
          className="form-control"
          {...register("name", {
            required: true,
          })}
        />
        {errors?.name && <Error>{errors.name.message}</Error>}
      </div>

      <div className="col-md-6">
        <label>Phone</label>
        <input
          defaultValue={user.phone}
          type="phone"
          className="form-control"
          {...register("phone", {
            required: true,
            minLength: 10,
            maxLength: 10,
          })}
        />
        {errors?.phone && <Error>{errors.phone.message}</Error>}
      </div>

      <div className="col-md-6">
        <label>DOB</label>
        <input
          defaultValue={user.dob}
          type="date"
          className="form-control"
          {...register("dob", { required: true })}
        />
        {errors?.dob && <Error>{errors.dob.message}</Error>}
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
