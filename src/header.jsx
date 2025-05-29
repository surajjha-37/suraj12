import React from "react";
import "./App.css";
import Logo from "./reactjs-badge.png";

function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img class="logo-in" src={Logo} alt="" />
          <h1 className="h1">
            ReactJS<span class="dev"> Dev</span>🚀
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a class="home" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="home-2" href="#">
                ReactNative
              </a>
            </li>
            <li>
              <a class="home-3" href="#">
                Kotlin
              </a>
            </li>
            <li>
              <select id="select">
                <option value="html">HTML</option>
                <option value="html">CSS</option>
                <option value="html">JS</option>
                <option value="html">ReactJS</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
