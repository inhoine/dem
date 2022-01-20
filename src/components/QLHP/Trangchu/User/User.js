import React from 'react'
import { Link } from 'react-router-dom'
import user from "../imguser/user.png"
export default function User() {
    return (
        <div>
            <div className="content-account">
                <img src={user} className="img-user" />
                <p className="account-name">Thị Tuyết</p>
                <Link className="account-logout" to={'/login'}>Đăng xuất</Link>
            </div>
        </div>
    )
}
