import { useState } from "react";
import "./Navbar.css";
import ContactModal from "../ContactModal";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [ismodal, setIsModal] = useState(false);

  return (
    <>
      <div className="conatiner-fluid background sticky-top">
        <nav className=" container navbar navbar-expand-lg navbar-dark  ">
          <div className="container-fluid">
            <a className="navbar-brand logo gradient-Text  p-2 fs-3" href="#">
              Manu MN
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul
                className="navbar-nav d-flex justify-content-center gap-3"
                style={{ width: "100%" }}
              >
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="about">
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="capstoneProject">
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="certificates">
                    Certificates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="btn1 text-white  "
                onClick={() => setIsModal(true)}
              >
                Contact Me
              </button>
            </div>
          </div>
        </nav>
      </div>
      {ismodal && (
        <ContactModal show={ismodal} setIsmodal={setIsModal}></ContactModal>
      )}
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
