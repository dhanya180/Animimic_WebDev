import React, { Component } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./aboutus.css";

class AboutUs extends Component {
  state = { clicked: false };

  handleclick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <img className="iconn" src="/images/icon22.jpg" alt="" />
          </a>

          {/* <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a className="homee" href="index.html">
                  Home
                </a>
              </li>

              <li>
                <a href="index.html">Contact</a>
              </li>
              <li>
                <a href="index.html">Login</a>
              </li>
              <li>
                <a href="index.html">Signup</a>
              </li>
              {/* <i className="fas fa-user-circle   proficon" style={{ fontSize: "30px", color: "white" }}></i> 
            </ul>
          </div>

          <div id="smalldev" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div> */}
        </nav>
        <div className="secondsec">
          <div>About Us</div>
        </div>

        <div className="thirdsec">
          <h1>Welcome to Animimic!</h1>
          <p>
            At Animimic, we believe pets are family, and every pet has a unique
            story worth sharing. We're building a community where pet owners,
            enthusiasts, and learners come together to celebrate, learn, and
            support each other in the journey of pet care and companionship.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a space where pet lovers from all
            backgrounds can come together to build a connected, supportive, and
            joyful community. Whether you’re a first-time pet owner, a lifelong
            animal lover, or a curious learner, Animimic is dedicated to helping
            you discover the joy, wisdom, and fun that pets bring to our lives.
          </p>
        </div>
        <div className="fourthsec"></div>
        <div className="corevalues">
          <h2>Our core values</h2>
          <div className="values">
            <div className="firstcore">
              <div>
                <h3>Community</h3>
                <p>
                  We’re here to connect pet owners and enthusiasts from around
                  the world. Our platform is a safe, welcoming environment for
                  exchanging advice, sharing experiences, and forming
                  friendships over our shared love for animals.
                </p>
              </div>
            </div>
            <div className="secondcore">
              <div>
                <h3>Learning and Growth</h3>
                <p>
                  We believe that learning about pets should be as exciting as
                  it is informative. That’s why our content, discussions, and
                  resources aim to support your journey in understanding and
                  caring for pets.
                </p>
              </div>
            </div>
            <div className="thirdcore">
              <div>
                <h3>Fun and Engagement</h3>
                <p>
                  At Animimic, learning about pets doesn’t stop at facts. We
                  want to bring joy to kids and adults alike with creative and
                  engaging content, especially through our “fun Animimic”
                  feature, where pets “mimic” each other, adding a lighthearted,
                  educational twist.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="animimic-offers">
          <h2>What Animimic Offers</h2>
          <ul className="offer-list">
            <li>
              <h3>Discussion Forum</h3>
              <p>
                Dive into conversations with fellow pet owners, share insights,
                ask questions, and explore solutions to any challenges. Our
                forum fosters a spirit of collaboration and mutual support,
                connecting people who share a love for pets.
              </p>
            </li>
            <li>
              <h3>Blog and Article Library</h3>
              <p>
                Whether you’re looking for expert insights, fun pet activities,
                or health tips, our blog library has it all. You can even
                contribute by uploading your own blog posts to share your unique
                experiences and knowledge with the community.
              </p>
            </li>
            <li>
              <h3>Fun Animimic Feature</h3>
              <p>
                Designed especially for younger audiences, our “fun Animimic”
                section introduces kids to pets in a playful and imaginative
                way, where one pet mimics another. It’s a delightful way to
                learn about pets while adding a touch of humor and creativity.
              </p>
            </li>
          </ul>
        </section>

        <section className="join-animimic-family">
          <div className="join-text">
            <h2>Join the Animimic Family</h2>
            <p>
              At Animimic, pets are more than companions—they’re family. We
              invite you to be part of our growing community, where every story
              matters and every member finds a place to belong. Join us in
              celebrating the wonderful world of pets!
            </p>
          </div>
          <NavigateButton />
        </section>
      </>
    );
  }
}

// Functional component to navigate to the login page
function NavigateButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      ANIMIMIC
    </button>
  );
}

export default AboutUs;
