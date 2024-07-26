import "../Mini-Projects/MiniProjects.css";
import bootstrp1 from "../../assets/bootstrap1.png";
import calc from "../../assets/calc.png";
import currency from "../../assets/currency-convertor.png";
import random from "../../assets/random.png";
import weather from "../../assets/weather.png";
import todo from "../../assets/todo.png";
import shopping from "../../assets/shopping.png";
import curd from "../../assets/curd.png";
import worldmap from "../../assets/worldmap.png";
import thunk from "../../assets/thunk.png";

const MiniProject = () => {
  return (
    <>
      <div className="container mt-5">
        <h4>Mini-Projects:</h4>
        <div className="row mt-5 ">
          <div className="col-md-4 mb-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={bootstrp1} className="image-style"></img>
              <p className="lead text-center gradient-Text">Landing page</p>
              <p className="text-white text-center">(using Bootstrap)</p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://corso-training-app.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/bootstrap-projects"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={calc} className="image-style"></img>
              <p className="lead text-center gradient-Text">Calculator</p>
              <p className="text-white">(using Html,css,bootstrap,js)</p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://mini-calc-project.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/mini_projects/tree/mini-calc-project"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={currency} className="image-style"></img>
              <p className="lead text-center gradient-Text">
                Currency-Converter
              </p>
              <p className="text-white">(using Html,css,bootstrap,js)</p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://currency-converter-mini-project.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/mini_projects/tree/currency_exchange-mini-project"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={random} className="image-style"></img>
              <p className="lead text-center gradient-Text">Random Quotes</p>
              <p className="text-white">(using Html,css,bootstrap,js)</p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://random-quotes-generator-project.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/mini_projects/tree/radom_quotes"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={weather} className="image-style"></img>
              <p className="lead text-center gradient-Text">Weather App</p>
              <p className="text-white">
                (using Html,css,bootstrap,js,fetch Api)
              </p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://mini-project-weather-app1.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/mini_projects/tree/weather_app"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={todo} className="image-style"></img>
              <p className="lead text-center gradient-Text">Todo App</p>
              <p className="text-white">(using React,bootstrap,)</p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://todo-mini-react-project.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/React-Mini-Projects/tree/todo"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={shopping} className="image-style"></img>
              <p className="lead text-center gradient-Text">Shopping Cart</p>
              <p className="text-white">
                (using React,bootstrap,Redux,fetch Api)
              </p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://shoppingapp-redux-toolkit.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/React-Mini-Projects/tree/redux-cart-app"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={curd} className="image-style"></img>
              <p className="lead text-center gradient-Text">CURD Opertion</p>
              <p className="text-white">
                (using React,bootstrap,axios,fetch Api)
              </p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://axios-crud-operations-app.netlify.app"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/React-Mini-Projects/tree/axios_crud"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={worldmap} className="image-style"></img>
              <p className="lead text-center gradient-Text">Worldmap</p>
              <p className="text-white">
                (using React,bootstrap,axios,fetch Api)
              </p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://country-map-react-project.vercel.app/"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/country_map-react_project/tree/master/world_map_project"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center custom p-3 container-animation">
              <img src={thunk} className="image-style"></img>
              <p className="lead text-center gradient-Text">CURD</p>
              <p className="text-white">(using Redux-thunk,React,bootstrap)</p>
              <div className="d-flex gap-2 mt-2 justify-content-center">
                <a
                  className="btn btn-success"
                  href="https://curd-thunk.vercel.app/"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="btn btn-warning"
                  href="https://github.com/manumn95/CURD-Thunk"
                  target="blank"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniProject;
