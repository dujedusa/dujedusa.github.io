import { FunctionComponent, useState } from "react";

const Contact: FunctionComponent = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [subject, updateSubject] = useState("");
  const [message, updateMessage] = useState("");

  const checkFormState = (): void => {
    console.log(name, email, subject, message);
  };
  return (
    <div className="contact-container">
      <div className="row">
        <div className="col">
          <div className="contact-main-text">
            <h1>Get in touch</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-subtext">
            <h2>
              Want to collaborate, or have any questions?
              <br />
              Feel free to contact me without any hesitation.
            </h2>
          </div>
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          checkFormState();
        }}
      >
        <div className="form-container">
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Your name</label>
              <input
                className="form-control"
                id="name"
                value={name}
                onChange={(event) => updateName(event.target.value)}
              />
              <span className="field-validation-error">
                Please enter your name.
              </span>
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="email">Your email</label>
              <input
                className="form-control"
                id="email"
                value={email}
                onChange={(event) => updateEmail(event.target.value)}
              />
              <span className="field-validation-error">
                Please enter your email.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control"
                id="subject"
                value={subject}
                onChange={(event) => updateSubject(event.target.value)}
              />
              <span className="field-validation-error">
                Please enter your subject.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
                style={{ resize: "vertical" }}
                value={message}
                onChange={(event) => updateMessage(event.target.value)}
              />
              <span className="field-validation-error">
                Please enter your message.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button className="btn">Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
