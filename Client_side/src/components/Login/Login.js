import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCancel = () => {
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "prem123@gmail.com" && password === "123") {
            setMessage("Login successful");
            setIsSuccess(true);
            navigate("/home"); // Navigate to home page on successful login
        } else {
            setMessage("Incorrect credentials!");
            setIsSuccess(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://i.imghippo.com/files/MlTij1728811979.png)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform scale-100 relative">
                <button
                    onClick={handleCancel}
                    className="absolute top-2 right-2 p-2 rounded focus:outline-none focus:ring focus:ring-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8"
                    >
                        <path
                            fill="#808080"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-center">Login</h2>

                <img
                    src="https://i.imghippo.com/files/bCpnh1728811335.png"
                    alt="Travel"
                    className="w-full h-auto object-cover rounded-lg"
                />
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a
                            className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                            href="/forgot-password"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Sign In
                        </button>
                    </div>
                    <a
                        className="inline-block align-baseline align-center text-sm text-blue-500 hover:text-blue-800 mt-4 text-center"
                        href="/signup"
                    >
                        Not registered yet? Let’s get you set up!
                    </a>
                </form>
                {message && (
                    <p
                        className={`text-center mt-4 ${
                            isSuccess ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;
