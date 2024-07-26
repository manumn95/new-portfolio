import "../Skills/Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import git from "../../assets/git.png";
import netlify from "../../assets/netlify.png";

const Skills = () => {
  return (
    <>
      <div className="container" id="skills">
        <h1 className="gradient-Text text-center mt-5">Skills</h1>
        <div className="row mt-5 ">
          <div className="d-flex flex-wrap justify-content-evenly">
            <div className="skill-container fs-3">
              <div className="p-5">
                <img src={html}></img>
                <p>HTML</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={css} className="fs-2"></img>
                <p>CSS</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={js}></img>
                <p>JavaScript</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={bootstrap}></img>
                <p>Bootstrap</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img
                  src={express}
                  className="rounded"
                  style={{ width: "48px", height: "48px" }}
                ></img>
                <p>Express JS</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={mongodb}></img>
                <p>MongoDb</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={mysql}></img>
                <p>Mysql</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={node}></img>
                <p>Node JS</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img src={git}></img>
                <p>Git Hub</p>
              </div>
            </div>

            <div className="skill-container fs-3">
              <div className=" p-5">
                <img
                  src={netlify}
                  style={{ width: "48px", height: "48px" }}
                ></img>
                <p>Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
