import React from "react";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

const About = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

  return (
    <>
      <div className="about">
        <div className="text">
          <h1>
            I have a strong understanding of building dynamic and responsive
            user interfaces, integrating <span>APIs,</span> and managing the
            state of web applications using <span>Redux</span>. Your use of{""}
            <span>CSS</span> libraries such as <span>Bootstrap</span>
            and <span>Chakra-ui</span> enables you to create visually appealing
            and modern designs for your web applications.
          </h1>
        </div>

        <div className="logos">
          <DiHtml5 color="red" />
          <FaCss3Alt color="blue" />
          <IoLogoJavascript color="#E9D44D" />
          <FaReact color="#5ED3F3" />
          <FaBootstrap color="#7410F0" />
          <SiChakraui color="#47C8C2" />
        </div>
      </div>
    </>
  );
};

export default About;
