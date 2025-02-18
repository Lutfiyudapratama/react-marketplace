import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerSubmit } from "../redux/UserSlice";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const onSubmit = (value) => dispatch(registerSubmit(value))
    const registerState = useSelector((data) => data?.user)
    const registerstate = useSelector((data) => data?.user)

useEffect(() => {
    if(registerState?.message !== null){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${registerstate?.message}`,
            showConfirmButton: false,
            timer: 1500
          }).then(() => redirect("/login"));
          return;
    }
},[registerstate])
    return (
        <div className="container bg-dark my-5 p-5">
        <span className="text-danger">{
            registerState?.err?.message
        }</span>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="pb-3">Register sek rek</h1>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                Name
                </label>
                <input
                type="text"
                className="form-control"
                {...register("name")}
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                Email address
                </label>
                <input
                type="email"
                className="form-control"
                {...register("email")}
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                Password
                </label>
                <input
                type="password"
                className="form-control"
                {...register("password")}
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                Password confirmation
                </label>
                <input
                type="password"
                className="form-control"
                {...register("password_confirmation")}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
  );
};

export default Register;