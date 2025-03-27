import { useState } from "react"
import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

useState

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (email === "admin@gmail.com" && password === "password123") {
            alert("Login Successfully");
        } else {
            alert("Invalid email or Password")
        }
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 ">
            <div className="p-5 shadow-lg LoginForm" style={{ width: "450px" }}>
                <h2 className="text-center text-light mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage