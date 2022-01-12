import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import hamburgerMenuIcon from "./assets/hamburger.svg";

const NavBar: FunctionComponent = () => {
  const toggleMenu = (): void => {
    const expandableNavBar: HTMLElement | null =
      document.getElementById("navBarExpandable");

    if (!expandableNavBar) {
      return;
    }

    if (!expandableNavBar.classList.contains("collapsed")) {
      expandableNavBar.classList.add("collapsed");
    } else {
      expandableNavBar.classList.remove("collapsed");
    }
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar-main">
        <Link className="nav-item-link" to="/">
          <h1>DUJE DUŠA</h1>
        </Link>
        <ul className="nav-items-main">
          <li>
            <a className="nav-item-link" href="#a">
              CV
            </a>
          </li>
          <li>
            <a className="nav-item-link" href="#a">
              About
            </a>
          </li>
          <li>
            <Link to="contact" className="nav-item-link">
              Contact
            </Link>
          </li>
          <li>
            <a className="nav-item-link" href="#a">
              Testimonials
            </a>
          </li>
        </ul>
        <button className="menu-toggler" onClick={toggleMenu}>
          <img src={hamburgerMenuIcon} alt="Menu icon" />
        </button>
      </div>
      <div className="nav-bar-dropdown collapsed" id="navBarExpandable">
        <ul className="nav-items-expanded">
          <li>
            <a className="nav-item-link" href="#a">
              CV
            </a>
          </li>
          <li>
            <a className="nav-item-link" href="#a">
              About
            </a>
          </li>
          <li>
            <Link to="contact" className="nav-item-link">
              Contact
            </Link>
          </li>
          <li>
            <a className="nav-item-link" href="#a">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
