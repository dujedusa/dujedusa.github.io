import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import "./style.css";
import facebookIcon from "./assets/facebook-square-brands.svg";
import linkedInIcon from "./assets/linkedin-brands.svg";
import emailIcon from "./assets/envelope-solid.svg";
import { HashLink } from "react-router-hash-link";
import Attribution from "./Attribution";
import { FunctionComponent, useState } from "react";
import Modal from "./Modal";

const App: FunctionComponent = () => {
  const [showModal, updateShowModal] = useState(false);
  const toggleModal = (): void => {
    updateShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <div className="page-container">
      <BrowserRouter>
        <header className="header">
          <NavBar />
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="footer">
          <section className="footer-container">
            <div className="row">
              <div className="col">
                <h1>Feeling more casual? Reach me out on social media.</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>Or just send an email.</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="social-media-links">
                  <a
                    href="https://www.facebook.com/duje.dusa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebookIcon}
                      alt="Reach the author on Facebook link"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/duje-du%C5%A1a-673016227"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedInIcon}
                      alt="Reach the author on LinkedIn link"
                    />
                  </a>
                  <HashLink className="nav-item-link" smooth to="contact#top">
                    <img src={emailIcon} alt="Mail the author link" />
                  </HashLink>
                </div>
              </div>
            </div>
            <span className="toggle-modal-text-btn" onClick={toggleModal}>
              View attributions
            </span>
            {showModal ? (
              <Modal>
                <Attribution />
                <span
                  style={{ margin: "0" }}
                  className="toggle-modal-text-btn"
                  onClick={toggleModal}
                >
                  Close
                </span>
              </Modal>
            ) : null}
            <div className="row">
              <div className="col">
                <hr />
                <p>© 2022 - Duje Duša</p>
              </div>
            </div>
          </section>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
