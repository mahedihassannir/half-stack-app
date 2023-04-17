import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contex } from './contex/Contex';
import { sendEmailVerification } from 'firebase/auth';



const Register = () => {
    let { create } = useContext(contex)

    let { setmahedi, seterr } = useState("")

    let click = (event) => {
        event.preventDefault()
        let form = event.target

        let name = form.name.value
        let email = form.email.value
        let password = form.password.value
        let confirm = form.confirm.value
        console.log(name, email, password, confirm);

        create(email, password)
            .then(res => {
                let remaning = res.user
                console.log(remaning);
                verify(res.user)
            })


        let verify = (user) => {

            sendEmailVerification(user)
            alert("verufy email")
        }


        if (password !== confirm) {
            seterr(alert("your password did not match"))
            return

        }
        else if (password.length < 6) {
            alert("password must be 6 charecter")
        }

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={click} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text"> confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <small className='text-blue-400'><Link to="/Login">have an account</Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;