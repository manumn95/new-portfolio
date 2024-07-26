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
              <p className="mt-3 lh-lg">
              I am Manu MN, a dedicated and passionate software developer with a Bachelor of Engineering (B.E) in Computer Science and Engineering, completed in 2017. I have 1 year of experience as a Desktop Support Engineer. Recently, I have upskilled by completing a comprehensive MERN (MongoDB, Express.js, React.js, Node.js) Full Stack Development course from GuVI, IIT Madras. Through this program, I have successfully executed four capstone projects, which have provided me with practical expertise in the MERN stack.

With a solid understanding of full stack development and a keen interest in software development, I am enthusiastic about embarking on a new career journey in the software development field. I am eager to apply my skills and knowledge to contribute effectively to a dynamic team and drive impactful projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
