import "../About/About.css";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <>
      <section className="mt-5 container" id="about">
        <h1 className="section-title gradient-Text text-center about-section">
          ABOUT ME
        </h1>
        <div className="row  ">
          <div className="col-md-4 d-flex gap-5">
            <img src={profile} className="profile-img"></img>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-center h-100 ">
              <h3 className="mt-3">Introduction:</h3>
              <p className="gradient-Text mt-3">
                Hello! I'm Manu MN, a passionate and dedicated Full Stack MERN
                Developer. After a career break of six years, I have
                successfully transitioned back into the tech industry by
                completing a Full Stack MERN course from GUVI. This
                comprehensive program has equipped me with a solid understanding
                of modern web development technologies and hands-on experience
                in building robust applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
