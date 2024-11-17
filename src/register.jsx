import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Login from './Login'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './register.css';

function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    mobile: '',
    email: '',
    password: '',
    // confirmPassword: '',
    termsAccepted: false,
  });


  // const handleRegisterSubmit = (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   // You can add any form handling logic here
  //   navigate('/security-questions'); // Navigate to the security questions page
  // };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginLink = () =>{
    navigate('/login');
  };

  const isValidate = () => {
    let isValid = true;
    let errorMessage = 'Please enter the value in: ';
    
    if (!formData.name) {
      isValid = false;
      errorMessage += 'Name, ';
    }
    if (!formData.username) {
      isValid = false;
      errorMessage += 'User Name, ';
    }
    if (!formData.mobile) {
      isValid = false;
      errorMessage += 'Mobile Number, ';
    }
    if (!formData.email) {
      isValid = false;
      errorMessage += 'Email, ';
    }
    if (!formData.password) {
      isValid = false;
      errorMessage += 'Password, ';
    }
    // if (!formData.confirmPassword) {
    //   isValid = false;
    //   errorMessage += 'Confirm Password, ';
    // }
    if (!formData.termsAccepted) {
      isValid = false;
      errorMessage += 'Terms Accepted, ';
    }

    if (!isValid) {
      toast.warning(errorMessage.slice(0, -2)); // Remove last comma and space
    }
    
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidate()) {
      const regobj = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
        name: formData.name,
      };
      console.log('Registering with data:', regobj);
      fetch("https://animimic.onrender.com/api/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(regobj)
      })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(errorData.message || 'Failed to register');
          });
        }
        return res.json(); // If the response is okay, parse it
      })
      .then((data) => {
        console.log('Registration successful:', data);
       // toast.success('Registered successfully.');
        navigate('/security-questions', {state:{email:formData.email}});
      })
      .catch((err) => {
        setFormData({
          name: '',
          username: '',
          mobile: '',
          email: '',
          password: '',
          termsAccepted: false,
        });
        toast.error(`Error: ${err.message}`);
        console.error('Error:', err);
      });
      
    }
  };

  return (
    <div className="containerRegister">
      <h2 className="register">Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="register-box"
          />
        </div>
        <div className="input-group">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder='animimic_123'
            onChange={handleChange}
            required
            className="register-box"
          />
        </div>
        <div className="input-group">
          <label>Mobile No</label>
          <input
            type="tel"
            name="mobile"
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="register-box"
          />
        </div>
        <div className="input-group">
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="register-box"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            className="register-box"
          />
        </div>
        <div className="register-terms-container">
            <input
              type="checkbox"
              name="termsAccepted"
              className="register-terms-checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            
            <label className="terms-register-label">
            I agree to the terms and conditions.
          </label>
          </div>

        <button type="submit" className="register-submit-button">
          Register
        </button>
        {/*<br></br>
        <a href="/security-questions">Register</a>*/}
      </form>
    
      <p className="register-para">
        Already have an account? <Link to="/login" className="r-loginLink">Login</Link>
      </p>
    </div>
  );
}

export default Register;
