import React, { useState } from "react";

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName || !password) {
            alert("All fields are required");
            return;
        }

        alert(`Simulating logging in user: ${userName}!`);

        //Clear Form
        setUserName("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
            <h3>Login</h3>

            <div className="mb-3">
                <label htmlFor="userNameField" className="form-label">Email</label>
                <input type="email" className="form-control" id="userNameField" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label htmlFor="passwordField" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordField" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Sign In</button>
            {" "}
            <a href="/register" className="btn btn-light">Register</a>
        </form>
    )
}

export default LoginForm;