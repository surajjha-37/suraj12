import React from "react";
import "./App.css";
import Javascript from "./Jslogo.jpg";
import HTML from "./htmllogo.png";
import CSS from "./Csslogo.jpg";
import ReactJs from "./ReactJslogo.jpg";

function Skill() {
  return (
    <div>
      <div className="skilldiv">
        <div className="skillflex">
          <h1 className="mainskill">My Skills 👨‍🎓</h1>
          <h3 className="skillabout-p">Web Dev | ReactJS Dev | SURAJ JHA</h3>
        </div>
        <div className="skillabout">
          <div className="logos"></div>
          <div className="skilltitle">
            <div class="html">
              <h3 class="htmlnote">HTML</h3>
              <img className="htmllogo" src={HTML} alt="" />
              <button class="moreview">moreview</button>
            </div>

            <div class="html">
              <h3 class="htmlnote">CSS</h3>
              <img className="Csslogo" src={CSS} alt="" />
              <button class="moreview">moreview</button>
            </div>
            <div class="html">
              <h3 class="htmlnote">JS</h3>
              <img className="Jslogo" src={Javascript} alt="" />
              <button class="moreview">moreview</button>
            </div>
            <div class="html">
              <h3 class="htmlnote">ReactJS</h3>

              <img className="ReactJslogo" src={ReactJs} alt="" />
              <button class="moreview">moreview</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
