import React from 'react'
import "./App.css"

export const LoginForm = (props) => {
    return (
        <form action="http://localhost:3000/login" method='post' className="loginForm">
            <label htmlFor="uname">Your Username here</label>
            <div>
                <input type="email" name="email" id="" className="unameBox" />
            </div>
            <label htmlFor="pass">
                Your Password here
            </label>
            <div>
                <input type="password" name="password" id="" className="userPassword" />
            </div>
           <button>Log in</button>
        </form>
    )
}
