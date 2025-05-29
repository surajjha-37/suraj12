import React from "react";
import "./App.css";

function Contact() {
  return (
    <div>
      <div className="footerdiv">
        <div className="footerflex">
          <div className="footer-1">
            <h3 className="footer-h1">
              <u>About Me 👨‍🎓</u>
            </h3>
            <p className="footer-p1">
              Hi There, I'm Suraj Jha . I'm a Passionate Web Developer This
              Portfolio is designed Using <b>ReactJS. </b>. Now, I wan't to
              learn Backened languages and Database.
            </p>
          </div>
          <div className="footer-1">
            <h3 className="footer-h1">
              <u>Quick links 📌</u>
            </h3>
            <ul className="footer-p1-ul">
              <li className="home-li">Home</li>
              <li className="home-li">About</li>
              <li className="home-li">Contact</li>
              <li className="home-li">Skills</li>
              <li className="home-li">Projects</li>
            </ul>
          </div>
          <div className="footer-1">
            <h3 className="footer-h1">
              <u>Social Links 📌</u>
            </h3>
            <ul className="footer-p1-ul">
              <a href="#" className="ul-a">
                Github
              </a>
              <a href="#" className="ul-a">
                Netlify
              </a>
              <a href="#" className="ul-a">
                LinkedIn
              </a>
              <a href="#" className="ul-a">
                Instagram
              </a>
              <a href="#" className="ul-a">
                Superprof
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
