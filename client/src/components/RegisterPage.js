import React, { useState } from "react";
import { history } from "../helpers";
import { connect } from "react-redux";
import { postUserRegistration } from "../actions";

const RegisterPage = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!FirstName || !LastName || !UserName || !Password) {
            alert("All fields are required");
            return;
        }

        setIsSubmitted(true);

        props.postUserRegistration({ FirstName, LastName, UserName, Password });

        setTimeout(() => {
            history.push("/", { message: "User registration was successful!" });
        }, 3000);
    }
    return (
        <div className="container">
            <form style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
                <h3>Registration</h3>

                <div className="mb-3">
                    <label htmlFor="firstNameField" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstNameField" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastNameField" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastNameField" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

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
                    Registering
                    </button>
                :
                    <button type="submit" className="btn btn-primary">Submit</button>
                }
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { registerUser: state.registerUser };
  };

export default connect(mapStateToProps, { postUserRegistration })(RegisterPage);