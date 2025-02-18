import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LoginSubmit } from '../redux/UserSlice';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const loginsState = useSelector((root) => root?.user);
    const dispatch = useDispatch();
    const onSubmit = (value) => dispatch(LoginSubmit(value));

    useEffect(() => {
        if (loginsState?.message !== null) {
            Swal.fire({
                position: 'top-end',
                icon: loginsState?.message === 'wrong password' ? 'error' : 'success',
                title: `${loginsState?.message}`,
                showConfirmButton: false,
                timer: 1500,
            }).then(() => 
                {
                    if (loginsState?.message === 'login success!') {
                        window.location.href = '/dashboard';
                    }
            });
            return;
        }
    }, [loginsState]);

    return (
        <div className="container bg-dark my-5 p-5">
            <span className="text-danger">
                {loginsState?.err?.message}
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="pb-3">Login sek rek</h1>
                <div className="container bg-dark my-5 p-">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            {...register('email')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            {...register('password')}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;