import { useState } from "react";
import React from "react";
import Header from "./header.jsx";
import Body from "./body.jsx";
import Skill from "./skills.jsx";
import Project from "./project.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
