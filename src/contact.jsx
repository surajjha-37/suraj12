import React from "react";
import "./App.css";

function Contact() {
  return (
    <div>
      <div className="contactdiv">
        <div className="contactflex">
          <h1 className="maincontact">Contact Us☎️</h1>
        </div>
        <div className="contactflex-2">
          <div className="in-flex">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="in-flex">
            <label htmlFor="name">Mobile No</label>
            <input type="text" id="name" />
          </div>
          <div className="in-flex">
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name" />
          </div>
          <div className="in-flex">
            <label htmlFor="name">Address</label>
            <input type="text" id="name" />
          </div>
          <div className="in-flex-2">
            <label htmlFor="name-2">Drop a message</label>
            <input type="text" id="name-2" />
          </div>
          <div className="in-btn">
            <button
              className="in-btn-in
            "
            >
              Send Message📩
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
