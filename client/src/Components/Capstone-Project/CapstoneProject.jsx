import "./CapstoneProject.css";
import video from "../../assets/videos.mp4";
import chatApp from "../../assets/chatapp.mp4";
import MiniProject from "../Mini-Projects/MiniProject";
import ecommerce from "../../assets/ecommerce.mp4";
import resturant from "../../assets/resturant.mp4";
import { useState } from "react";

const CapstoneProject = () => {
  const [miniProject, setMiniProject] = useState(false);
  return (
    <>
      <div className="container mt-5 ">
        <button
          className="btn btn-danger rounded mx-3"
          onClick={() => setMiniProject((prev) => !prev)}
        >
          Capstone-Projects
        </button>
        <button
          className="btn btn-danger rounded"
          onClick={() => {
            setMiniProject((prev) => !prev);
          }}
        >
          Mini-Projects
        </button>
      </div>

      {miniProject ? (
        <MiniProject></MiniProject>
      ) : (
        <>
          <div className="container mt-5" id="projects">
            <h1 className="gradient-Text text-center">Projects</h1>
            <h4 className="mt-3">Capstone-Project:</h4>

            <div className="row  ">
              <div className="col-md-6 p-5">
                <h4 className="gradient-Text">
                  Track-Fit (Fitness Tracker App )
                </h4>
                <p>Description:</p>
                <p>
                  The Fitness App is a comprehensive application designed to
                  help users track their fitness goals, monitor daily
                  activities, and maintain a healthy lifestyle. It provides
                  features such as heart rate monitoring, step tracking, calorie
                  counting, and workout analysis.
                </p>
                <ul className="text-secondary">
                  <li>
                    User Authentication: Secure login and registration for
                    users.
                  </li>
                  <li>
                    Dashboard: Overview of daily fitness stats, including heart
                    rate, steps taken, and calories burned.
                  </li>
                  <li>Goals: Set and track personal fitness goals.</li>
                  <li>Workouts: Log workouts and view detailed statistics.</li>
                  <li>
                    Charts: Visual representation of fitness data using pie and
                    line charts.
                  </li>
                </ul>
                <div className="d-flex justify-content-center gap-5">
                  <a
                    href="https://trackfit-fitness-app.netlify.app"
                    target="blank"
                    className="btn btn1"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/manumn95/Track_Fit"
                    target="blank"
                    className="btn btn1"
                  >
                    Source
                  </a>
                </div>
              </div>
              <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
                <video
                  src={video}
                  muted
                  loop
                  autoPlay
                  style={{ width: "100%" }}
                ></video>
                <p className="text-center text-warning lead">Demo</p>
              </div>
            </div>
          </div>

          {/* project2 */}
          <div className="container mt-5" id="projects">
            <div className="row  ">
              <div className="col-md-6 p-5">
                <h4 className="gradient-Text">Chat Application</h4>
                <p>Description:</p>
                <p>
                  A modern chat application built with React, Redux,Axios,and
                  Socket.Io featuring user profile management and real-time
                  updates.
                </p>
                <ul className="text-secondary">
                  <li>
                    User Profile Management: Edit and update user details,
                    including profile picture.
                  </li>
                  <li>
                    Image Upload: Upload and change profile pictures with a
                    seamless experience.
                  </li>
                  <li>
                    Responsive Design: Optimized for various screen sizes and
                    devices
                  </li>
                  <li>
                    Error Handling: Proper error handling and notifications for
                    user interactions.
                  </li>
                </ul>
                <div className="d-flex justify-content-center gap-5">
                  <a
                    href="https://chatapp-frontend-ten-jade.vercel.app"
                    target="blank"
                    className="btn btn1"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/manumn95/chatapp-frontend"
                    target="blank"
                    className="btn btn1"
                  >
                    Source
                  </a>
                </div>
              </div>
              <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
                <video
                  src={chatApp}
                  muted
                  loop
                  autoPlay
                  style={{ width: "100%" }}
                ></video>
                <p className="text-center text-warning lead">Demo</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}

          <div className="container mt-5" id="projects">
            <div className="row  ">
              <div className="col-md-6 p-5">
                <h4 className="gradient-Text">Ecommerce Application</h4>
                <p>Description:</p>
                <p>
                  An eCommerce application built using the MERN (MongoDB,
                  Express, React, Node.js, Tailwind,stripe) stack.
                </p>
                <ul className="text-secondary">
                  <li>User authentication and authorization</li>
                  <li>Product browsing and searching</li>
                  <li>Shopping cart and checkout</li>
                  <li>Order management</li>
                  <li>Payment processing with Stripe</li>
                  <li>Admin dashboard for product and order management</li>
                </ul>
                <div className="d-flex justify-content-center gap-5">
                  <a
                    href="https://mern-ecommerce-frontend-amber.vercel.app/"
                    target="blank"
                    className="btn btn1"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/manumn95/MERN-Ecommerce?tab=readme-ov-file"
                    target="blank"
                    className="btn btn1"
                  >
                    Source
                  </a>
                </div>
              </div>
              <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
                <video
                  src={ecommerce}
                  muted
                  loop
                  autoPlay
                  style={{ width: "100%" }}
                ></video>
                <p className="text-center text-warning lead">Demo</p>
              </div>
            </div>
          </div>

          {/* project-4 */}

          <div className="container mt-5" id="projects">
            <div className="row  ">
              <div className="col-md-6 p-5">
                <h4 className="gradient-Text">Resturant Application</h4>
                <p>Description:</p>
                <p>
                  A full-stack restaurant management application built using the
                  MERN (MongoDB, Express, React, Node.js) stack. This
                  application uses Tailwind CSS for styling and integrates
                  Stripe for payment processing.
                </p>
                <ul className="text-secondary">
                  <li>User authentication and authorization</li>
                  <li>CRUD operations for product management</li>
                  <li>Order management</li>
                  <li>Order management</li>
                  <li>Payment processing with Stripe</li>
                  <li>Admin dashboard for product and order management</li>
                  <li>Responsive design using Tailwind CSS</li>
                </ul>
                <div className="d-flex justify-content-center gap-5">
                  <a
                    href="https://new-resturant-app.vercel.app/"
                    target="blank"
                    className="btn btn1"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/manumn95/New-Resturant-App"
                    target="blank"
                    className="btn btn1"
                  >
                    Source
                  </a>
                </div>
              </div>
              <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
                <video
                  src={resturant}
                  muted
                  loop
                  autoPlay
                  style={{ width: "100%" }}
                ></video>
                <p className="text-center text-warning lead">Demo</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CapstoneProject;
