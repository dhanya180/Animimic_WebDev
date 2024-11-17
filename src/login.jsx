import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const usenavigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let isValid = true;
    if (!formData.username) {
      toast.warning("Username is required");
      isValid = false;
    }
    if (!formData.email) {
      toast.warning("Email is required");
      isValid = false;
    }
    if (!formData.password) {
      toast.warning("Password is required");
      isValid = false;
    }
    return isValid;
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const regobj = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      fetch("https://animimic.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regobj),
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(errorData.message || 'invalid credentials');
          });
        }
        return res.json(); // If the response is okay, parse it
      })
      .then((data) => {
        const access_token=data.token;
        const userId = data.userid;
        console.log("access token:", access_token);
        console.log("User ID:", userId);
        localStorage.setItem("userId", userId);
        localStorage.setItem("access_token", access_token);
        console.log('Login successful:', data);
        toast.success('logged in successfully.');
        usenavigate('/home', { replace: true });
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
        console.error('Error:', err);
      });
    }
  };
  useEffect(() => {
    // Add a class to the <body> element when the component mounts
    document.body.classList.add('login-page-body');

    // Optional cleanup to remove the class when the component unmounts
    return () => {
        document.body.classList.remove('login-page-body');
    };
}, []);

  return (
    <div className="login-container">
      <h2 className="login">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label>Username</label>
          <input
            className="login-page-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="animimic_123"
            required
          />
        </div>

        <div className="login-form-group">
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-page-input"
          />
        </div>

        <div className="login-form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="login-page-input"
          />
        </div>
        <button type="submit" className="main-login-button">
          Login
        </button>
      </form>
      <div className="login-forgot-password">
        <a href="/reset-password" className="forgot">Forgot Password?</a>
      </div>

        <p className="login-p">
        Don't have an account? <a href="/register" className="login-registerLink">Register</a>
        </p>
    
    </div>
  );
}

export default Login;