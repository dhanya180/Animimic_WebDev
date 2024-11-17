// import React, { createContext, useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ResetPassword from "./resetPassword.jsx";
// import HomePage1 from "./homepage1.jsx";
// import HomePage2 from "./homepage2.jsx";
// import Register from "./register.jsx";
// import Login from "./login.jsx";
// import Profile from "./profile.jsx";
// import TermsAndConditions from "./terms.jsx";
// import PrivacyPolicy from "./privacy.jsx";
// import Cookies from "./cookies.jsx";
// import SecurityQuestions from "./securityQuestions.jsx";
// import AboutUs from './aboutus.jsx';
// import FAQ from './faqs.jsx';
// import DiscussionForum from './discussionForum.jsx';
// import CommentPage from './commentPage.jsx';
// import Cat from './cat.jsx';
// import Dog from './dog';
// import Bee from './bee';
// import Tiger from './tiger';
// import Elephant from './elephant';
// import Navbar from "./components/navbar.component";
// import SearchPage from "./pages/search.page";
// import HomePage from "./pages/home.page";
// import PageNotFound from "./pages/404.page";
// import BlogPage from "./pages/blog.page";
// import Editor from "./pages/editor.pages";
// import "./App.css";

// export const UserContext = createContext();

// const App = () => {
//   return (
//     <UserContext.Provider>
//       <Routes>
//       <Route path="/navbar" element={<Navbar />}>
//                 <Route index element={<HomePage />} />
//                 <Route path="search/:query" element={<SearchPage />} />
//                 <Route path="blog/:blog_id" element={<BlogPage />} />
//                 <Route path="*" element={<PageNotFound />} />
//             </Route>
//         <Route path="/" element={<HomePage1/>} />
//         <Route path="/discussions" element={<DiscussionForum/>}/>
//         <Route path="/comments/:id" element={<CommentPage/>}/>
//         <Route path="/home" element={<HomePage2 />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/security-questions" element={<SecurityQuestions />} />
//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/cookies" element={<Cookies />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="faqs" element={<FAQ />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/simulation" element={<Dog />} />
//         <Route path="/cat" element={<Cat />} />
//         <Route path="/bee" element={<Bee />} />
//         <Route path="/tiger" element={<Tiger />} />
//         <Route path="/elephant" element={<Elephant />} />
//         <Route path="/editor" element={<Editor />} />
//       </Routes>
//     </UserContext.Provider>
//   );
// };

// export default App;


import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import ResetPassword from "./resetPassword.jsx";
import HomePage1 from "./homepage1.jsx";
import HomePage2 from "./homepage2.jsx";
import Register from "./register.jsx";
import Login from "./login.jsx";
import Profile from "./profile.jsx";
import TermsAndConditions from "./terms.jsx";
import PrivacyPolicy from "./privacy.jsx";
import Cookies from "./cookies.jsx";
import SecurityQuestions from "./securityQuestions.jsx";
import DiscussionForum from './discussionForum.jsx';
import CommentPage from './commentPage.jsx';
import AboutUs from './aboutus.jsx';
import FAQ from './faqs.jsx';
import SearchPage from "./pages/search.page";
import HomePage from "./pages/home.page";
import PageNotFound from "./pages/404.page";
import BlogPage from "./pages/blog.page";
import Editor from "./pages/editor.pages";
import Cat from './cat.jsx';
import Dog from './dog';
import Bee from './bee';
import Tiger from './tiger';
import Elephant from './elephant';
import "./App.css";

export const UserContext = createContext();


const App = () => {
        // Initialize userAuth state
        //const [userAuth, setUserAuth] = useState();
    
        return (
           <UserContext.Provider>
                <Routes>
            {/* Routes with Navbar layout */}
            <Route path="/navbar" element={<Navbar />}>
                <Route index element={<HomePage />} />
                </Route>
                <Route path="search/:query" element={<SearchPage />} />
                <Route path="blog/:blog_id" element={<BlogPage />} />
                <Route path="*" element={<PageNotFound />} />
            

            {/* Standalone routes */}
            <Route path="/editor" element={<Editor />} />
            <Route path="/" element={<HomePage1/>} />
         <Route path="/discussions" element={<DiscussionForum/>}/>
         <Route path="/comments/:id" element={<CommentPage/>}/>
         <Route path="/home" element={<HomePage2 />} />
         <Route path="/login" element={<Login />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/register" element={<Register />} />
         <Route path="/security-questions" element={<SecurityQuestions />} />
         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/cookies" element={<Cookies />} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="faqs" element={<FAQ />} />
         <Route path="/reset-password" element={<ResetPassword />} />
         <Route path="/simulation" element={<Dog />} />
         <Route path="/cat" element={<Cat />} />
         <Route path="/bee" element={<Bee />} />
         <Route path="/tiger" element={<Tiger />} />
         <Route path="/elephant" element={<Elephant />} />
            {/* <Route path="/about-us" element={<AboutUs />} /> */}
            {/* <Route path="/faqs" element={<FAQ />} /> */}
            {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        </Routes>
                
           </UserContext.Provider>
        );
    }
    
    export default App;

// import Navbar from "./components/navbar.component";
// import React, { createContext, useState } from "react";
// import {BrowserRouter,Routes, Route } from "react-router-dom";
// //import UserAuthForm from  "./pages/userAuthForm.page";
// //import UserNavigationPanel from "./components/user-navigation.component";
// //import BlogPostCard from "./components/blog-post.component";
// import Navbar from "./components/navbar.component";
// import SearchPage from "./pages/search.page";
// import HomePage from "./pages/home.page";
// import BlogPage from "./pages/blog.page";
// import Editor from "./pages/editor.pages";
// import ManageBlogs from "./pages/manage-blogs.page";
// import PageNotFound from "./pages/404.page";
// import ResetPassword from "./resetPassword.jsx";
// import HomePage1 from "./homepage1.jsx";
// import HomePage2 from "./homepage2.jsx";
// import Register from "./register.jsx";
// import Login from "./login.jsx";
// import Profile from "./profile.jsx";
// import TermsAndConditions from "./terms.jsx";
// import PrivacyPolicy from "./privacy.jsx";
// import Cookies from "./cookies.jsx";
// import SecurityQuestions from "./securityQuestions.jsx";
// import DiscussionForum from './discussionForum.jsx';
// import CommentPage from './commentPage.jsx';
// import AboutUs from './aboutus.jsx';
// import FAQ from './faqs.jsx';
// import Cat from './cat.jsx';
// import Dog from './dog';
// import Bee from './bee';
// import Tiger from './tiger';
// import Elephant from './elephant';

// export const UserContext = createContext();

// const App = () => {
//     // Initialize userAuth state
//     //const [userAuth, setUserAuth] = useState();

//     return (
//        <UserContext.Provider>
//             <Routes>
//                 <Route path="/editor" element={<Editor/>}></Route>
//                 <Route path="/dashboard/blog" element={<ManageBlogs/>}></Route>
//                 <Route path="/navbar" element={<Navbar/>}>
//                <Route index element={<HomePage />} /> 
//                </Route>
//                 <Route path="search/:query" element={<SearchPage />} />
//                 <Route path="blog/:blog_id" element={<BlogPage />} />
//                 <Route path="*" element={<PageNotFound />} /> 
//                 <Route path="/" element={<HomePage1/>} />
//           <Route path="/discussions" element={<DiscussionForum/>}/>
//           <Route path="/comments/:id" element={<CommentPage/>}/>
//             <Route path="/home" element={<HomePage2 />} />
//           <Route path="/login" element={<Login />} />
//          <Route path="/profile" element={<Profile />} />
//          <Route path="/register" element={<Register />} />
//          <Route path="/security-questions" element={<SecurityQuestions />} />
//           <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/cookies" element={<Cookies />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/faqs" element={<FAQ />} />
//           <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/simulation" element={<Dog />} />
//          <Route path="/cat" element={<Cat />} />
//        <Route path="/bee" element={<Bee />} />
//           <Route path="/tiger" element={<Tiger />} />
//           <Route path="/elephant" element={<Elephant />} />
                
//             </Routes>
            
//        </UserContext.Provider>
//     );
// }

// export default App;