import { setAuthToken } from "http/axiosConfig";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../domain/services/Authentication";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    let path = "/register";
    navigate(path);
  };

  const handleLogin = async () => {
    try {
      const response = await login({
        username,
        password,
      });
      const authToken = response.token;
      setAuthToken(authToken);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="bg-red-100 px-8 pb-6">
      <div className="mb-4 mt-8 p-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="w-full py-2 px-3"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6 mt-10 px-8 pb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="border border-red-500 w-full py-2 px-3 "
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500 italic">Please choose a password.</p>
      </div>
      <div className=" flex flex-col px-8 pb-6">
        <button
          className="btn-primary text-white py-2 px-4 mb-2 "
          type="button"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <Link className="text-center" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <div className="flex justify-around ">
        <p className="text-sm">Don't have an account?</p>
        <button
          className="brd-primary outline-none focus:outline-none px-4 "
          type="button"
          onClick={onRegister}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
