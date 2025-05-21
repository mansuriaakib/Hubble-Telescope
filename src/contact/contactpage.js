import React, { useRef, useState } from "react";
import FooterPage from "../footer/footerpage";
import HeaderPage from "../header/headerpage";
import "./contactpage.css";
import { GoArrowUpRight } from "react-icons/go";
import { ErrorMessage, Formik } from "formik";
import emailjs from "emailjs-com";
import { Toast } from "primereact/toast";

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useRef(null);

  const handleSubmit = (values) => {
    emailjs
      .send(
        "service_yo81igk",    // ✅ SERVICE ID IN EMAIL JS
        "template_7m2kr4g",   // ✅ TEMPLATE ID IN EMAIL JS
        values,
        "GU2Uq7a-9Gqk_12Y0"     // ✅ PUBLIC KEY IN EMAIL JS
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.current.show({
          severity: "success",
          detail: "Thank you for contacting me!",
          life: 3000,
        });
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.current.show({
          severity: "error",
          detail: "Something went wrong, please try again.",
          life: 3000,
        });
      });
  };

  return (
    <>
      <HeaderPage />
      <Toast ref={toast} />
      <div className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12 card_center">
              <div className="contact_heading">
                <h1>
                  Love to hear from you, Get in touch
                  <br />
                  <p>
                    Please fill out this form and get in touch with us!
                    <br />
                    <br />
                    Since its 1990 launch, Hubble has changed our fundamental
                    understanding of the universe.
                  </p>
                </h1>
              </div>

              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
                validate={(values) => {
                  const errors = {};
                  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                  if (!values.firstname) errors.firstname = "Enter your first name";
                  if (!values.lastname) errors.lastname = "Enter your last name";
                  if (!values.email) {
                    errors.email = "Enter your email";
                  } else if (!emailRegex.test(values.email)) {
                    errors.email = "Enter valid email address";
                  }
                  if (!values.subject) errors.subject = "Enter your subject";
                  if (!values.message) errors.message = "Enter your message";
                  return errors;
                }}
              >
                {({ values, handleSubmit, handleChange }) => (
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <ErrorMessage name="firstname" component="div" className="error" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <ErrorMessage name="lastname" component="div" className="error" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">Your Email</label>
                        <input
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <ErrorMessage name="email" component="div" className="error" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          className="form-control"
                        />
                        <ErrorMessage name="subject" component="div" className="error" />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Your Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        value={values.message}
                        onChange={handleChange}
                      />
                      <ErrorMessage name="message" component="div" className="error" />
                    </div>

                    <div className="s-btn">
                      <button type="submit">
                        Just Send <GoArrowUpRight className="arrow-icon" />
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default ContactPage;
