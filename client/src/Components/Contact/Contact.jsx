import "../Contact/Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email_id: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_l0bfoof";
    const templateID = "template_efk1but";
    const publicKey = "AKTiH29JFTcfmcXpo";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (result) => {
        setFormData({ user_name: "", email_id: "", message: "" });
        toast.success(
          "Your message has been sent successfully! I'll get back to you as soon as possible." +
            result.text
        );
      },
      (error) => {
        toast.error("Failed to send email. Error:", error.text);
      }
    );
  };

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ marginTop: "100px" }}
        id="contact"
      >
        <h1 className="text-center gradient-Text">Contact Me</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="exampleInputname"
                  aria-describedby="emailHelp"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                ></input>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email_id"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={formData.email_id}
                  onChange={handleChange}
                  required
                ></input>
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center mb-3">
                {" "}
                <button type="submit" className="btn btn1 text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
