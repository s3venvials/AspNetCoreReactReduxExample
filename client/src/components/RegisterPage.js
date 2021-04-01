import React, { useState, useEffect } from "react";
import { history } from "../helpers";
import { connect } from "react-redux";
import { postUserRegistration } from "../actions";
import Alert from "./Alert";

const RegisterPage = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Hash, setHash] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [resMsg, setResMsg] = useState("");

    useEffect(() => {
        if (isSubmitted && props.registerUser.status !== null) {
            if (props.registerUser.status !== 400) {
                setTimeout(() => {
                    history.push("/");
                  }, 600);  
            } else {
                setResMsg(props.registerUser.message);
                setIsSubmitted(false);
            }
        }
    }, [props.registerUser]);

    const handleSubmit = (e) => {
       
        e.preventDefault();

        if (!FirstName || !LastName || !UserName || !Hash) {
            setResMsg("All fields are required");
            return;
        }

        setIsSubmitted(true);

        props.postUserRegistration({ FirstName, LastName, UserName, Hash });
    }

    return (
        <div className="container">
            {resMsg && <Alert type="alert-danger" message={resMsg} />}

            <form style={{ maxWidth: "400px", margin: "0 auto" }} onSubmit={handleSubmit}>
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
                    <input type="password" className="form-control" id="passwordField" value={Hash} onChange={(e) => setHash(e.target.value)} />
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