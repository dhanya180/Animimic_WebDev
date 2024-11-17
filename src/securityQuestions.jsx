import React, { useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import './securityQuestions.css';
import {toast} from "react-toastify";

const SecurityQuestions = () => {

  const navigate=useNavigate();
  const location =useLocation();
  const email=location.state?.email;
  const [securityData, setSecurityData] = useState({
    question1: '',
    answer1: '',
    question2: '',
    answer2: '',
    question3: '',
    answer3: '',
  },[email,navigate]);

  const questions = [
    "Who is your best friend?",
    "Where were you born?",
    "What is your dream place to visit?",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSecurityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const isValidate = () => {
    let isValid = true;
    let errorMessage = 'Please enter the value in: ';
    
    if (!securityData.question1) {
      isValid = false;
      errorMessage += 'Question-1, ';
    }
    if (!securityData.answer1) {
      isValid = false;
      errorMessage += 'Answer-1, ';
    }
    if (!securityData.question2) {
      isValid = false;
      errorMessage += 'Question-2, ';
    }
    if (!securityData.answer2) {
      isValid = false;
      errorMessage += 'Answer-2, ';
    }
    if (!securityData.question3) {
      isValid = false;
      errorMessage += 'Question-3, ';
    }
    // if (!formData.confirmPassword) {
    //   isValid = false;
    //   errorMessage += 'Confirm Password, ';
    // }
    if (!securityData.answer3) {
      isValid = false;
      errorMessage += 'Answer-3, ';
    }

    if (!isValid) {
      toast.warning(errorMessage.slice(0, -2)); // Remove last comma and space
    }
    
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Security Questions Submitted: ", securityData);
    // Add form submission logic, such as sending data to a backend API
    if (isValidate()) {
      const regobj = {
        email:email,
        secquestion1: securityData.question1,
        secanswer1: securityData.answer1,
        secquestion2: securityData.question2,
        secanswer2: securityData.answer2,
        secquestion3: securityData.question3,
        secanswer3:securityData.answer3,
      };
      console.log('Saving and Updating with data:', regobj);
      fetch("https://animimic.onrender.com/api/update", {
        method: "PUT",
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
        navigate('/login', { replace: true});
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
        console.error('Error:', err);
      });
      
    }
  };

  return (
    <div className="security-questions-container">
      <h2 className="security-title">Security Questions</h2>
      <form onSubmit={handleSubmit}>
        {[1, 2, 3].map((num) => (
          <div key={num} className="security-group">
            <label htmlFor={`question${num}`} className="security-label">
              Question {num}
            </label>
            <select
              name={`question${num}`}
              value={securityData[`question${num}`]}
              onChange={handleChange}
              required
              className="security-select"
            >
              <option value="" disabled>Select a question</option>
              {questions.map((question, index) => (
                <option key={index} value={question}>
                  {question}
                </option>
              ))}
            </select>
            <input
              type="text"
              name={`answer${num}`}
              value={securityData[`answer${num}`]}
              onChange={handleChange}
              required
              placeholder="Your answer"
              className="security-answer"
            />
          </div>
        ))}
        <button type="submit" className="submit-reset-button">Save</button>

        <p>*Please remember the answers for the above questions.*</p>
      </form>
    </div>
  );
};

export default SecurityQuestions;
