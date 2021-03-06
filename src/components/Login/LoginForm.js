import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";



function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}> 
                <div className='login-background'>
                    <div className='login-container'>
                    <div className='form-group'>
                    <h2 className="h2-login">Đăng nhập</h2>
                    <label className='email' htmlFor='email'>Tên đăng nhập<br/></label>
                    <input className='IPemail' type="email" name='email' id='email'  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                    </div>
                    <div className='form-group'>
                    <label className='password' htmlFor='password'>Mật khẩu<br/></label>
                    <input className='input-second' type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <div>
                    <Link className="forgot-pw" to={'/forgot'}>Quên mật khẩu?</Link>
                    <Link className="homepg" to={'/home'}><button className="btn-dangnhap">Đăng nhập</button></Link>
                    </div>
                    </div>
                </div>
        </form>
    )
}

export default LoginForm