// import { Component } from "react";
import React, { useState, useEffect } from "react";
// import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage2.css";

const HomePage2 = () => {
  const [clicked, setClicked] = useState(false);

  // Carousel items
  const [sliderItems, setSliderItems] = useState([
    {
      imgSrc: "/images/img2.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination to know about pets,",
      description: "pet care tips and a thriving pet loving community!",
    },
    {
      imgSrc: "/images/img3.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination to know about pets,",
      description: "pet care tips and a thriving pet loving community!",
    },
    {
      imgSrc: "/images/photo6.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination to know about pets,",
      description: "pet care tips and a thriving pet loving community!",
    },
    {
      imgSrc: "/images/img4.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination for know about pets,",
      description: "pet care tips and a thriving pet loving community!",
    },
  ]);

  // Thumbnail items (assumed same as slider items for now)
  const [thumbnailItems, setThumbnailItems] = useState(sliderItems);

  // Time intervals
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  // Current timeout reference
  const [currentTimeout, setCurrentTimeout] = useState(null);

  // Function to move to the next slide
  const moveNext = () => {
    setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    setThumbnailItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    resetAutoSlide();
  };

  // Function to move to the previous slide
  const movePrev = () => {
    setSliderItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
    setThumbnailItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
    resetAutoSlide();
  };

  // Reset the auto-slide timer
  const resetAutoSlide = () => {
    clearTimeout(currentTimeout);
    setCurrentTimeout(setTimeout(moveNext, timeAutoNext));
  };

  // Initialize auto-slide
  useEffect(() => {
    const timeout = setTimeout(moveNext, timeAutoNext);
    setCurrentTimeout(timeout);

    // Cleanup the timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <nav>
        <a href="index.html">
          <img className="iconn" src="/images/icon22.jpg" alt="" />
        </a>

        <div>
          <ul
            id="navbar"
            className={clicked ? "#navbar active" : "#navbar"}
            onClick={() => setClicked(!clicked)}
          >
            <li>
              <Link className="homee" to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us2">About Us</Link>
            </li>
            <Link to="/profile">
                <i className="fas fa-user-circle proficon" style={{ fontSize: "30px", color: "white" }}
                ></i>
              </Link>
          </ul>
        </div>

        <div id="smalldev" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
      <div className="carousel">
        <div className="list">
          {sliderItems.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.imgSrc} alt={item.title} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                {/* <div className="buttons">
                  <button>Login</button>
                  <button>Sign Up</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {thumbnailItems.map((thumb, index) => (
            <div className="item" key={index}>
              <img src={thumb.imgSrc} alt={thumb.title} />
              <div className="content">
                <div className="title"></div>
                <div className="description"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={movePrev}>
            &lt;
          </button>
          <button id="next" onClick={moveNext}>
            &gt;
          </button>
        </div>
        <div className="seperation"></div>
        <div className="time"></div>
      </div>
      <div className="seperate"></div>
      <div className="About">
        <img src="/images/img5.jpg" alt="..." height="500px" />
        <div className="sidepart">
          <h1 className="heading">About Us</h1>
          <h6 className="content2">
            Welcome to Animimic, a vibrant community for pet lovers! We offer a
            discussion forum for pet owners to share experiences, along with
            informative blogs and articles on pet care. Our unique 3D simulation
            feature lets kids enjoy watching one pet mimic another, combining
            fun and learning. Join us to connect, learn, and celebrate the joy
            of pet ownership!
          </h6>
        </div>
      </div>
      <div className="seperation"></div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="/images/photo7.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Community</h5>
                <p className="card-text">
                  Connect with other pet lovers and discover more about pets.
                </p>
                <Link to="/discussions" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://epicdrops.com/cdn/shop/collections/PSX_Logos-01_1_1200x1200.jpg?v=1655752145"
                className="card-img-top"
                alt="..."
                height="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Animations</h5>
                <p className="card-text">
                  Learn while enjoying pets mimicing other pets by 3D
                  simulations
                </p>
                <Link to="/simulation" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/images/photo8.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Blogs</h5>
                <p className="card-text">
                  Explore blogs and articles about your pet and discover tips.
                </p>
                <Link to="/navbar" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sep"></div>

      <footer>
        <div class="questions">
          Questions? Call <a href="faq">000-800-919-1694</a>
        </div>
        <div class="footer">
          <div class="footer-item">
            <Link to="/faqs">FAQs</Link>
            <Link to="/privacy-policy">Privacy</Link>

          </div>

          <div class="footer-item">
            <Link to="/about-us">About Us</Link>
            <Link to="/cookies">Cookie Preferences</Link>
            
          </div>
          <div class="footer-item">
            <Link to="/profile">Account</Link>
            {/*<a href="faq">Terms and conditions</a>*/}
            
          </div>

          <div class="footer-item">
          <Link to="/terms-and-conditions">Terms of Use</Link>
           
          </div>
        </div>

        <div>
          <div className="follow">Follow us on</div>
          <div class="socialIcons">
            <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-facebook fbicon"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram instaicon"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter  twittericon"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-google-plus googleicon"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-youtube youtubeicon"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage2;
