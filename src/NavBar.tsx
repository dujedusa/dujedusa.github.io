import { FunctionComponent } from "react";
import { HashLink } from "react-router-hash-link";
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

  const collapseNavBar = (): void => {
    const expandableNavBar: HTMLElement | null =
      document.getElementById("navBarExpandable");

    if (!expandableNavBar) {
      return;
    }

    if (!expandableNavBar.classList.contains("collapsed")) {
      expandableNavBar.classList.add("collapsed");
    }
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar-main">
        <HashLink
          className="nav-item-link"
          smooth
          to="home#top"
          onClick={collapseNavBar}
        >
          <h1>DUJE DUŠA</h1>
        </HashLink>
        <ul className="nav-items-main">
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="home#about-me-section"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="home#technologies-section"
            >
              Experiences
            </HashLink>
          </li>
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="home#testimonials-section"
            >
              Testimonials
            </HashLink>
          </li>
          <li>
            <HashLink className="nav-item-link" smooth to="contact#top">
              Contact
            </HashLink>
          </li>
        </ul>
        <button className="menu-toggler" onClick={toggleMenu}>
          <img src={hamburgerMenuIcon} alt="Menu icon" />
        </button>
      </div>
      <div className="nav-bar-dropdown collapsed" id="navBarExpandable">
        <ul className="nav-items-expanded">
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="home#about-me-section"
              onClick={collapseNavBar}
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="home#technologies-section"
              onClick={collapseNavBar}
            >
              Experiences
            </HashLink>
          </li>
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="home#testimonials-section"
              onClick={collapseNavBar}
            >
              Testimonials
            </HashLink>
          </li>
          <li>
            <HashLink
              className="nav-item-link"
              smooth
              to="contact#top"
              onClick={collapseNavBar}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
