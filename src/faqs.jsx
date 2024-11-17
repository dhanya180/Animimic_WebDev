import React, { useState } from 'react';
import './faqs.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); 

    const faqs = [
        {
            question: "What is Animimic?",
            answer: "Animimic is an online platform designed for pet owners and enthusiasts to connect, share experiences, and learn more about pet care through engaging content, blogs, and a discussion forum."
        },
        {
            question: "How do I create an account on Animimic?",
            answer: "To create an account, click on the 'Sign Up' button on the homepage, fill in your details, and follow the instructions to complete your registration."
        },
        {
            question: "Is there a fee to join Animimic?",
            answer: "No, joining Animimic is completely free! You can access our community, discussions, and resources without any charges."
        },
        {
            question: "How can I participate in discussions?",
            answer: "Once you’re logged in, navigate to the discussion forum and select a topic of interest. You can read, reply, or start a new thread by clicking on the appropriate buttons."
        },
        {
            question: "How do I upload a blog post?",
            answer: "After logging in, go to the 'Upload Blog' section, fill in your blog details, and submit it."
        },
        {
            question: "What types of pets can I discuss on Animimic?",
            answer: "You can discuss all types of pets! Whether you have a dog, cat, bird, reptile, or any other pet, you’re welcome to share your experiences and insights."
        },
        {
            question: "What is the “Fun Animimic” feature?",
            answer: "The “Fun Animimic” feature allows users to enjoy entertaining and educational content where pets mimic each other. This feature aims to bring joy and learning to both kids and adults."
        },
        
        {
            question: "How can I reset my password?",
            answer: "If you’ve forgotten your password, click on the 'Forgot Password?' link on the login page and follow the instructions to reset it."
        },
        {
            question: "Can I delete my account?",
            answer: "Yes, if you wish to delete your account, please contact our support team through the 'Contact Us' page, and they will assist you with the process."
        },
        {
            question: "Who do I contact if I need help?",
            answer: "For any issues or inquiries, please reach out to our support team via the 'Contact Us' page, and we’ll get back to you as soon as possible."
        },
        
        {
            question: "What are the community guidelines?",
            answer: "We encourage respectful, informative, and supportive discussions. Please refrain from using offensive language, sharing misleading information, or engaging in harassment. For a full list of guidelines, visit our Community Guidelines page."
        },
        {
            question: "Is there an app for Animimic?",
            answer: "Currently, Animimic is available as a web platform. However, we are working on developing a mobile app for easier access and better user experience. Stay tuned for updates!."
        },
        {
            question: "Is my personal information safe on Animimic?",
            answer: "Yes, we take your privacy seriously. All personal information is stored securely and will not be shared with third parties without your consent. Please review our Privacy Policy for more details.."
        },

        
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index); 
    };

    return (
        <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleAnswer(index)}>
                            <h3>{faq.question}</h3>
                            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;