import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import "./style.css";
import facebookIcon from "./assets/fb.svg";
import linkedInIcon from "./assets/linkedin.svg";
import emailIcon from "./assets/gmail.svg";

const App = () => {
  return (
    <div className="page-container">
      <BrowserRouter>
        <header className="header">
          <NavBar />
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
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
                  <Link className="nav-item-link" to="/contact">
                    <img src={emailIcon} alt="Mail the author link" />
                  </Link>
                </div>
              </div>
            </div>
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
