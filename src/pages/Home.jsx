import React from "react";
import sdd from "../pages/photo.jpg";

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

  return (
    <div className="home">
      <div className="content">
        <h1 className="head-text" id="head-text">
          <span className="front">Front-End</span> <br /> React Developer{" "}
          <span>👋</span>
        </h1>
        <p>Hi, i'm Seif Eldeen. A passionate Front-End React Developer</p>
      </div>
      <img src={sdd} className="img" alt="personal" />
    </div>
  );
};

export default Home;
