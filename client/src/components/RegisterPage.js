import React, { useState } from "react";
import { history } from "../helpers";

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !userName || !password) {
            alert("All fields are required");
            return;
        }

        alert("Simulating user registration");

        setIsSubmitted(true);

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
                    <input type="text" className="form-control" id="firstNameField" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastNameField" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastNameField" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="userNameField" className="form-label">Email</label>
                    <input type="email" className="form-control" id="userNameField" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                    <label htmlFor="passwordField" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordField" value={password} onChange={(e) => setPassword(e.target.value)} />
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

export default RegisterPage;