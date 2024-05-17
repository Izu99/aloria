import React from 'react'
import login from '../images/login-image.png'
import '../style/Login.css'
import { NavLink } from 'react-router-dom'
import google from '../images/google-logo.png'

const Login = () => {
    return (
        <div className="container login">
            <div className="row justify-content-center">
                <div className="col-10">
                    <div className="row">
                        <div className="col-12 col-sm-5 col-md-5 col-lg-5 m-0 p-0">
                            <img src={login} alt="" className='' />
                        </div>
                        <form action="" className="col-12 col-sm-7 col-md-7 col-lg-7 d-flex flex-column mt-5 form-outline">
                            <h2 className='text-center'>Login</h2>
                            <input type="text" placeholder='Email' className='mt-3 m-2 w-75 mx-auto form-control' />
                            <input type="password" placeholder='Password' className='my-2 w-75 mx-auto form-control' />
                            <button className='btn w-75 mx-auto mt-4 login-btn'><NavLink to='/homepage'>Login</NavLink> </button>
                            <button className='btn w-75 mx-auto mt-4 google-btn'><img src={google} alt="" /> Sign in with Google</button>
                            <div className="text mx-auto fs-5 mt-2 mb-2"><NavLink to={'/register'}>Don't have an Account?</NavLink></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
