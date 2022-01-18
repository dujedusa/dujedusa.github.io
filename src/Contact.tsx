import { FunctionComponent } from "react";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FunctionComponent = () => {
  const SERVICE = process.env.REACT_APP_SERVICE_ID as string;
  const TEMPLATE = process.env.REACT_APP_TEMPLATE_ID as string;
  const USER = process.env.REACT_APP_USER_ID as string;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const createToast = (
    className: string,
    bgColor: string,
    innerText: string
  ): HTMLDivElement => {
    const toast = document.createElement("div");
    toast.classList.add(className);
    toast.innerText = innerText;
    toast.style.backgroundColor = bgColor;
    toast.id = "toast";
    return toast;
  };

  const submitForm: SubmitHandler<FormInputs> = (
    formContent: FormInputs,
    event: any
  ) => {
    event.preventDefault();
    const btn = document.getElementById("submit-form-btn");
    const form = document.getElementById("form");
    const spinner = document.createElement("div");
    const successToast = createToast(
      "toast-success",
      "green",
      "Message sent successfully!"
    );
    const failureToast = createToast(
      "toast-failure",
      "darkred",
      "Message failed to sent, try again!"
    );

    if (btn !== null && spinner !== null) {
      spinner.classList.add("spinner");
      btn.innerText = "";
      (btn as HTMLButtonElement).disabled = true;
      btn?.appendChild(spinner);

      emailjs
        .send(SERVICE, TEMPLATE, formContent, USER)
        .then((res) => {
          console.log("Success ", res.status, res.text);
          form?.appendChild(successToast);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((err) => {
          console.log("Failed ", err);
          btn.removeChild(spinner);
          btn.innerText = "Send";
          form?.appendChild(failureToast);
          setTimeout(() => {
            form?.removeChild(failureToast);
            (btn as HTMLButtonElement).disabled = false;
          }, 3000);
        });
    }
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
      <form className="contact-form" onSubmit={handleSubmit(submitForm)}>
        <div id="form" className="form-container">
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Your name</label>
              <input
                className="form-control"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="field-validation-error">
                  Please enter your name.
                </span>
              )}
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="email">Your email</label>
              <input
                className="form-control"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="field-validation-error">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control"
                id="subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="field-validation-error">
                  Please enter a subject of the message.
                </span>
              )}
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
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="field-validation-error">
                  Please enter your message.
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button id="submit-form-btn" className="btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
