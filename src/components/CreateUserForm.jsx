import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../state/actions/users.action";
import Error from "./Error";

const CreateUserForm = ({ history }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data));
    history.push("/");
  };

  const onError = (error, e) => {
    if (error.name) {
      setError("name", { message: "name can not be empty" });
    }

    if (error.email) {
      setError("email", { message: "Enter a valid email" });
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
          type="text"
          className="form-control"
          {...register("name", {
            required: true,
          })}
        />
        {errors?.name && <Error>{errors.name.message}</Error>}
      </div>
      <div className="col-md-6">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
        {errors?.email && <Error>{errors.email.message}</Error>}
      </div>

      <div className="col-md-6">
        <label>Phone</label>
        <input
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
          type="date"
          className="form-control"
          {...register("dob", { required: true })}
        />
        {errors?.dob && <Error>{errors.dob.message}</Error>}
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
