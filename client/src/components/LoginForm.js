import React, { useState } from "react";
import { connect } from "react-redux";
import { postUserLogin } from "../actions";
import { history } from "../helpers";

const LoginForm = (props) => {
    const [UserName, setUserName] = useState("");
    const [Hash, setHash] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        props.postUserLogin({ UserName, Hash });

        setTimeout(() => {
            setIsSubmitted(false);

            //Clear Form
            setUserName("");
            setHash("");
        }, 600);
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h3>Login</h3>

            <div className="mb-3">
                <label htmlFor="userNameField" className="form-label">Email</label>
                <input type="email" className="form-control" id="userNameField" value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label htmlFor="passwordField" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordField" value={Hash} onChange={(e) => setHash(e.target.value)} />
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