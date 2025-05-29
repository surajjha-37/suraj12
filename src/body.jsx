import React from "react";
import "./App.css";
import Bodyimg from "./image.png";
import Bodyimgg from "./mainimg.png";

function Body() {
  return (
    <div>
      <div className="flex">
        <img className="flex-inn child rotate " src={Bodyimgg} alt="" />
        <img className="flex-in child" src={Bodyimg} alt="" />
        <img className="flex-inn child rotate-2" src={Bodyimgg} alt="" />
      </div>
      <div className="about">
        <h1 className="about-in">SURAJ JHA</h1>
        <h3 className="about-p">
          Web Dev | ReactJS Dev | In the guidance of SRGCTI
        </h3>
        <p className="about-para">
          <mark> Suraj Jha </mark>Aspiring Web Developer | Diploma in Computer
          Application (DCA) & Website Designing{" "}
          <mark>SRG Computer Training Institute</mark>, Ghaziabad A motivated
          and dedicated learner with strong skills in web development, having
          successfully completed DCA and Website Designing courses at SRG
          Computer Training Institute.
          <mark> Passionate about creating user-friendly websites</mark> and
          constantly improving technical knowledge to excel in the IT industry.
          Committed to delivering quality work and pursuing continuous
          professional growth.
        </p>
      </div>
    </div>
  );
}

export default Body;
