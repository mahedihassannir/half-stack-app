import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contex } from './contex/Contex';




const Login = () => {


    let { loginq } = useContext(contex)

    let login = (event) => {
        event.preventDefault()
        let form = event.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        loginq(email, password)

            .then(res => {
                let remaing = res.user
                console.log(remaing);
            })




    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={login} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <small className='text-blue-400'>
                                    <Link to="/Register">new in this website</Link>

                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Login;