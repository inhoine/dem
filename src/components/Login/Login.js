import React from 'react';
import "./Login.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import LoginForm from './LoginForm';
import ForgotPw from './ForgotPw';


export default function Login() {
    return (
        <div>
          <BrowserRouter>
             <div className="App">
                 <Routes>  
                    <Route exact path="/login" element={<LoginForm/>} />
                    <Route exact path="/forgot" element={<ForgotPw/>} />
                </Routes>
            </div>
        </BrowserRouter>
        </div>
    )
}
