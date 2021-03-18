import React, { useState } from "react";
import { history } from "../helpers";
import { connect } from "react-redux";
import { postUserLogin } from "../actions";

const LoginForm = (props) => {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!UserName || !Password) {
            alert("All fields are required");
            return;
        }

        setIsSubmitted(true);

        props.postUserLogin({ UserName, Password });

        //Clear Form
        setUserName("");
        setPassword("");

        setTimeout(() => {
            history.push("/", { message: "User successfully signed in!" });
            setIsSubmitted(false);
        }, 600);
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
            <h3>Login</h3>

            <div className="mb-3">
                <label htmlFor="userNameField" className="form-label">Email</label>
                <input type="email" className="form-control" id="userNameField" value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label htmlFor="passwordField" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordField" value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {isSubmitted ? 
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {" "}
                    Logging In
                </button>
                :
                <button type="submit" className="btn btn-primary">Sign In</button>
            }

            {" "}
            <a href="/register" className="btn btn-light">Register</a>
        </form>
    )
}

const mapStateToProps = (state) => {
    return { loginUser: state.loginUser };
};

export default connect(mapStateToProps, { postUserLogin })(LoginForm);