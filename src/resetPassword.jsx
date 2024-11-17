import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import './resetPassword.css';

const ResetPassword = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');


  const isValidate = () => {
    let isValid = true;
    let errorMessage = 'Please enter the value in: ';
    
    if (!email) {
      isValid = false;
      errorMessage += 'Email, ';
    }
    if (!password) {
      isValid = false;
      errorMessage += 'Password, ';
    }
    if (!securityQuestion) {
      isValid = false;
      errorMessage += 'Security Question, ';
    }
    if (!securityAnswer) {
      isValid = false;
      errorMessage += 'Security Answer, ';
    }
    if (!isValid) {
      toast.warning(errorMessage.slice(0, -2)); // Remove last comma and space
    }
    
    return isValid;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log({ email, password, securityQuestion, securityAnswer });

    if (isValidate()) {
      const regobj = {
        email: email,
        password: password,
        secquestion: securityQuestion,
        secanswer: securityAnswer,
      };
      console.log('Reseting the password with data:', regobj);
      fetch("https://animimic.onrender.com/api/reset", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(regobj)
      })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(errorData.message || 'Failed to failed to save the security questions');
          });
        }
        
        return res.json(); // If the response is okay, parse it
      })
      .then((data) => {
        console.log('Save successful:', data);
       // toast.success('Registered successfully.');
        navigate('/home', { replace: true});
      })
      .catch((err) => {
        setEmail('');
        setPassword('');
        setSecurityQuestion('');
        setSecurityAnswer('');
        //navigate('/reset-password', { replace: true});
        toast.error(`Error: ${err.message}`);
        console.error('Error:', err);
      });
      
    }
  };

  return (
    <div className="reset-container">
      <h2 className="reset">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-reset-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="input-reset-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/*<div className="input-reset-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>*/}

        <div className="input-reset-group">
          <label htmlFor="securityQuestion">Security Question</label>
          <select
            id="securityQuestion"
            value={securityQuestion}
            onChange={(e) => setSecurityQuestion(e.target.value)}
            required
          >
            <option value="">Select a question</option>
            <option value="Who is your best friend?">Who is your bestfriend?</option>
            <option value="Where were you born?">Where were you born?</option>
            <option value="What is your dream place to visit?">What is your dream place to visit?</option>
          </select>
        </div>

        <div className="input-reset-group">
          <label htmlFor="securityAnswer">Answer</label>
          <input
            type="text"
            id="securityAnswer"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-reset-button">Continue</button>
      </form>
    </div>
  );
};

export default ResetPassword;
