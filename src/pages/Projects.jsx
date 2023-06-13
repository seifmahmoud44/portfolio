import React, { useEffect } from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import one from "../pages/photos/one.png";
import tow from "../pages/photos/tow.png";
import three from "../pages/photos/three.png";
import crudjs from "../pages/photos/crudjs.png";
import weather from "../pages/photos/weather.png";
import crudReact from "../pages/photos/crud-react.png";
import ecommerce from "../pages/photos/ecommerce.png";
import storeSystem from "../pages/photos/store-system.png";
import welly from "../pages/photos/screencapture-welly-ecommerce-vercel-app-2023-06-13-22_26_59.png";
import { BiCodeAlt } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

  useEffect(() => {}, []);

  return (
    <div className="projects">
      <div className="pro-grid">
        <div className="item">
          <img src={welly} alt="" className="pic" />

          <div className="links">
            <h1 className="title">Welly ecommerce</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/welly-ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://welly-ecommerce.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={one} alt="" className="pic" />

          <div className="links">
            <h1 className="title">Kudzoka</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/kudzoka"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://kudzoka-liard.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={tow} alt="" className="pic" />
          <div className="links">
            <h1 className="title">Course Temp</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/course-temp"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://course-temp.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={three} alt="" className="pic" />
          <div className="links">
            <h1 className="title">Elzero Temp</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/elzero-temp"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://elzero-temp.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={crudjs} alt="" className="pic" />
          <div className="links">
            <h1 className="title">CRUD</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/crud"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://crud-tau-inky.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={weather} alt="" className="pic" />
          <div className="links">
            <h1 className="title">Weather App</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/weather"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://weather-mocha-two.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={crudReact} alt="" className="pic" />
          <div className="links">
            <h1 className="title">Crud React</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/crud-react"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://crud-react-kappa.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={ecommerce} alt="" className="pic" />
          <div className="links">
            <h1 className="title">Ecommerce</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/we-just-try"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://we-just-try.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={storeSystem} alt="" className="pic" />
          <div className="links">
            <h1 className="title">Store System</h1>
            <div className="content">
              <a
                href="https://github.com/seifmahmoud44/store-system"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt />
              </a>

              <a
                href="https://store-system-steel.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiShowAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
