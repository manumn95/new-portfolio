import { Modal } from "react-bootstrap";
import phone from "../assets/phone.png";
import email from "../assets/email.png";

const ContactModal = ({ show, setIsmodal }) => {
  const handleClose = () => setIsmodal(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="gradient-Text fs-3">Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={phone}></img>
          <span className="fs-5" style={{ color: "purple" }}>
            +91-8891709270
          </span>
          <br></br>
          <div className="d-flex">
            <img src={email}></img>
            <span
              className=" align-self-center justify-content-center fs-5"
              style={{ color: "purple", fontFamily: "cursive" }}
            >
              manumnofficial.95@gmail.com
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
