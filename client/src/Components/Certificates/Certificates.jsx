import html from "../../assets/HTML5.png";
import css from "../../assets/CSS3.png";
import js from "../../assets/Javascript.png";
import bstrap from "../../assets/Bstrap.png";
import react from "../../assets/ReactJs.png";
import node from "../../assets/Ndjs.png";
import mysql from "../../assets/my-sql.png";
import mongodb from "../../assets/Mdb.png";
import FSD from "../../assets/FSD.png";
import aws from "../../assets/AWS-cert.png";

const Certificates = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center gradient-Text mt-5">Certifications</h1>
        <div className="row mt-5">
          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={FSD}></img>
              <p className="text-center mt-3">MERN stack Completion</p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={html}></img>
              <p className="text-center mt-3">HTML</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={css}></img>
              <p className="text-center mt-3">CSS</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={bstrap}></img>
              <p className="text-center mt-3">Bootstrap</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={js}></img>
              <p className="text-center mt-3">Javascript</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={react}></img>
              <p className="text-center mt-3">React Js</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={node}></img>
              <p className="text-center mt-3">Node Js</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={mysql}></img>
              <p className="text-center mt-3">My Sql</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={mongodb}></img>
              <p className="text-center mt-3">MongoDb</p>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src={aws}></img>
              <p className="text-center mt-3">AWS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
