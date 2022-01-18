import { FunctionComponent } from "react";
import infomedicaLogo from "./assets/infomedica_logo.svg";
import infomedicaSimpleLogo from "./assets/infomedica_logo_simple.svg";
import profilePhoto from "./assets/profile_photo.jpg";
import angularIcon from "./assets/angular-brands.svg";
import reactIcon from "./assets/react-brands.svg";
import ionicIcon from "./assets/logo-ionic.svg";
import htmlIcon from "./assets/html5-brands.svg";
import cssIcon from "./assets/css3-alt-brands.svg";
import jsIcon from "./assets/js-square-brands.svg";
import gitIcon from "./assets/git-alt-brands.svg";
import gitlabIcon from "./assets/gitlab-brands.svg";
import bitbucketIcon from "./assets/bitbucket-brands.svg";
import netCoreIcon from "./assets/NET_Core_Logo.svg";
import efCoreIcon from "./assets/EF_Core.png";
import sqlIcon from "./assets/sql_logo.png";
import vsIcon from "./assets/VS_Code.svg";
import vsCodeIcon from "./assets/VS.svg";

const Home: FunctionComponent = () => {
  return (
    <div className="home-page-container">
      <section className="introductory-section-container">
        <div className="introductory-container">
          <div className="introductory">
            <div className="row">
              <div className="col profile-photo-container">
                <picture>
                  <img
                    className="profile-photo"
                    src={profilePhoto}
                    alt="Author"
                  />
                </picture>
              </div>
            </div>
            <div className="row">
              <div className="introductory-text-container">
                <h3>Hello there!</h3>
                <p className="introductory-text">
                  <span>
                    I'm <strong>Duje Duša,</strong>
                  </span>
                  <br />
                  <span>Web Developer.</span>
                  <br />
                  <span>
                    Passionate Drummer And Ocassional Live Sound Engineer.
                  </span>
                </p>
                <a href="CV.pdf" download="Duje_Duša_CV.pdf">
                  <button className="btn">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me-section" className="about-section-container">
        <div className="about-container">
          <div className="about">
            <div className="row">
              <div className="col">
                <div className="section-header-text">
                  <h1>Who Am I?</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="about-main-text">
                  <p>
                    I am a Javascript Developer located in Split (Croatia),
                    specializing in building Web applications primarly focused
                    on Front End technology stack with notable Back End
                    experience. I'm driven and motivated by simple responsive
                    Web Designs. Always looking for enhancing my skills and
                    experience.
                  </p>
                  <p>
                    My journey as an Software Developer began in 2014. with the
                    slightest touches with the C/C++ programming language and
                    writing primitive console applications. Since then, within
                    college project, I've built simple Music Player which
                    represents first real encounters with real life
                    applications. I've earned Master of Science degree at
                    Faculty of Electrical Engineering, Mechanical Engineering
                    and Naval Architecture within which I developed hybrid
                    mobile application using Web Technologies. To this day, I've
                    been working at Infomedica, medical-IT solutions company and
                    have a partnership startup project currently in development.
                  </p>
                  <p>
                    Besides being a Software Developer Lecturer in 2019. at
                    Jantar - Foreign Language School, which drastically improved
                    my presentation and teaching skills, I've also been
                    volunteering as a Stage Technician/Live Sound Engineer in
                    local night club Kocka. Although it's not software
                    development oriented, volunteering gave me wide range of
                    skills like teamwork and collaboration with other event
                    organization departments and/or artists, coordination and
                    management of technical operations, solving complex problems
                    etc. Also, I'm a passionate drummer that enjoys listening
                    and exploring music. :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="technologies-section"
        className="technologies-section-container"
      >
        <div className="technologies-container">
          <div className="technologies">
            <div className="row">
              <div className="col">
                <h1>Technologies and tools I worked with</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="tech-img"
                  src={angularIcon}
                  alt="Angular framework icon"
                />
              </div>
              <div className="col">
                <img className="tech-img" src={reactIcon} alt="React.js icon" />
              </div>
              <div className="col">
                <img
                  className="tech-img"
                  src={ionicIcon}
                  alt="Ionic UI library icon"
                />
              </div>
              <div className="col">
                <img className="tech-img" src={htmlIcon} alt="HTML5 icon" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img className="tech-img" src={cssIcon} alt="CSS3 icon" />
              </div>
              <div className="col">
                <img className="tech-img" src={jsIcon} alt="Javascript icon" />
              </div>
              <div className="col">
                <img className="tech-img" src={gitIcon} alt="Git icon" />
              </div>
              <div className="col">
                <img className="tech-img" src={gitlabIcon} alt="GitLab icon" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="tech-img"
                  src={bitbucketIcon}
                  alt="Bitbucket icon"
                />
              </div>
              <div className="col">
                <img
                  className="tech-img"
                  src={netCoreIcon}
                  alt=".NET Core icon"
                />
              </div>
              <div className="col">
                <img
                  className="tech-img"
                  src={efCoreIcon}
                  style={{ borderRadius: "50%" }}
                  alt="Entity Framework Core icon"
                />
              </div>
              <div className="col">
                <img
                  className="tech-img"
                  style={{ backgroundColor: "white", borderRadius: "50%" }}
                  src={sqlIcon}
                  alt="Microsoft SQL Server icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="tech-img"
                  src={vsIcon}
                  alt="Microsoft Visual Studio icon"
                />
              </div>
              <div className="col">
                <img
                  className="tech-img"
                  src={vsCodeIcon}
                  alt="Microsoft Visual Studio Code icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section-container">
        <div className="experience-container">
          <div className="experiences">
            <div className="row">
              <div className="col">
                <div className="experiences-title-text">
                  <h1>What are my experiences?</h1>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="container left">
                <div className="content">
                  <span>September 2019 - October 2021</span>
                  <h2>Infomedica d.o.o.</h2>
                  <p>
                    Medical-IT solutions company where I was working as Junior
                    Full Stack Developer focusing on Radiological Information
                    System using Angular, .NET Core, EF Core and SQL relational
                    database. Key challenges and skills gained:
                  </p>
                  <ul>
                    <li>
                      Teamwork and collaboration despite COVID-19 pandemic
                    </li>
                    <li>Simple and effective UI design</li>
                    <li>Web application full development cycle</li>
                    <li>Medical staff thinking</li>
                    <li>
                      Regional clients collaboration and software maintenance
                    </li>
                  </ul>
                  <a
                    className="nav-item-link"
                    href="https://infomedica.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.infomedica.hr
                  </a>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <span>In Development</span>
                  <h2>Personal projects</h2>
                  <p>
                    Self invested projects developed within college projects,
                    Master Thesis and in free time:
                  </p>
                  <ul>
                    <li>
                      Oglasomat - hybrid mobile application for faster listings
                      findings on local advertising website developed using
                      Ionic, Cordova and SQLite.
                    </li>
                    <li>
                      GigBook - in development with colleague using Angular,
                      .NET Core, EF Core and SQL relational database. Mini
                      social website that should help local organisers to avoid
                      event overlapping.
                    </li>
                    <li>
                      MusicPlayer - simple music player built within college
                      class using Android Studio and Java.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container left">
                <div className="content">
                  <span>September 2018 - June 2019</span>
                  <h2>Jantar</h2>
                  <p>
                    Software Development Lecturer at Jantar - Foreign Language
                    School. Teached youth about general programming ideas and
                    paradigms introducing Visual Studio as IDE, C++ language and
                    console applications. Key challenge was to simplify
                    curriculum and to adapt it to student capabilities which
                    improved my presentation skills and performances.
                  </p>
                  <a
                    className="nav-item-link"
                    href="https://www.jantar.hr/hr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.jantar.hr
                  </a>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <span>January 2014 - December 2020</span>
                  <h2>KUM - Club Kocka</h2>
                  <p>
                    Stage technician/Live Sound Enginner volunteer. Gained and
                    improved skills relevant to software development are
                    teamwork, social skills, coordination and management,
                    solving complex problems.
                  </p>
                  <a
                    className="nav-item-link"
                    href="https://www.kum-split.hr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kum-split.hr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="testimonials-section"
        className="testimonials-section-container"
      >
        <div className="testimonial-container">
          <div className="testimonials">
            <div className="testimonial-title-container">
              <div className="row">
                <div className="col">
                  <div className="testimonial-title-text">
                    <h1>Testimonials</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="row">
                <div className="col">
                  <div className="testimonial-header">
                    <a
                      href="https://infomedica.hr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={infomedicaLogo}
                        className="infomedica-logo"
                        alt="Infomedica website link"
                      />
                    </a>
                    <a
                      href="https://infomedica.hr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={infomedicaSimpleLogo}
                        className="infomedica-logo-simple"
                        alt="Infomedica website link"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="testimonial-content">
                    <p>
                      "It's my pleasure to recommend our former employee Duje
                      Duša for the software developer job position. He is
                      cordial and fits easily into the team. He quickly acquired
                      the necessary professional knowledge, showing additional
                      initiative and successfully solving all the given
                      problems. He performed his work tasks correctly and on
                      time, both in the company office and while working from
                      home due to the COVID-19 pandemic. He has made visible
                      professional progress and I believe he can be a valuable
                      member of your team."
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="testimonial-footer">
                    <strong>Mladen Vučić</strong>
                    <p>CEO at Infomedica d.o.o.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
