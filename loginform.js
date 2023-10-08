import React, {useEffect, useState} from "react";
import "./loginform.css"

const LoginForm = () => {


    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />


            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="google">
                    
                </div>
            </div>
            
        </div>
    )
}

export default LoginForm