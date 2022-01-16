import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";


function ForgotPw({Forgot, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Forgot(details);
    }
    return (
        <form onSubmit={submitHandler}> 
                <div className='login-background'>
                    <div className='login-container'>
                    <div className='form-group'>
                    <h2 className="h2-login">Cấp lại mật khẩu</h2>
                    <label className='email' htmlFor='email'>Tên đăng nhập <br/></label>
                    <input className='IPemail' type="email" name='email' id='email'  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                    </div>
                    <div className='form-group'>
                    <label className='xacthuc' htmlFor='xacthuc'>Mã xác thực <br/></label>
                    <input className='input-xacthuc' type="xacthuc" name='xacthuc' id='xacthuc' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <div>
                    <Link className="forgot-pw" to={'/login'}>Quay lại trang chủ</Link>
                    <input className='btn-dangnhap' type="submit" value="Cấp lại mật khẩu" />
                    </div>
                    </div>
                </div>
        </form>
    )
}

export default ForgotPw