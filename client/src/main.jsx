import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import CapstoneProject from "./Components/Capstone-Project/CapstoneProject.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Certificates from "./Components/Certificates/Certificates.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "capstoneProject",
        element: <CapstoneProject></CapstoneProject>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "certificates",
        element: <Certificates></Certificates>,
      },
      {
        path: "*",
        element: <div>Page Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
