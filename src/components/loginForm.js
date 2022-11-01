import React from "react";
import SubmitButton from "./submit";
import Username from "./username";
import Password from "./password";
import Navbar from "./navbar";



export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="container">
                <div id='login' className="card">
                    <div className="card-header bg-primary text-white text-center">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <Username/>
                        <Password/>
                        <br/>
                        <SubmitButton/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

