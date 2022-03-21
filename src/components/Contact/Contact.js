import React from "react";
import style from "./contact.module.css";
import { Icon } from "@iconify/react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2bmmwna",
        "template_fdoqdys",
        e.target,
        "kAKRRaseFh1C2EJlY"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <h2 className={style.contactTitle}>contact</h2>
      <section className={style.container}>
        <div className={style.mailContainer}>
          <h2 className={style.sectionTitle}>
            Interested in working together...
          </h2>
          <form onSubmit={sendEmail}>
            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className={style.input}
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <textarea
              name="message"
              rows="6"
              className={style.emailText}
              placeholder="How can I help?"
            />
            <input className={style.button} type="submit" value="send" />
          </form>
        </div>
        <div className={style.socialContainer}>
          <section className={style.contactSectionContainer} id="contact">
            <div className={style.socialPara}>
              <p className={style.socPara}>Or say 'hi' on social media.</p>
            </div>
            <section className={style.socialLinksContainer}>
              <a
                href="https://www.linkedin.com/in/alex-platt-linked/"
                className={style.socialLink}
                id="linkedin"
                title="linkedin"
              >
                <Icon
                  icon="logos:linkedin-icon"
                  className={style.socialLogo}
                  alt="linkedin"
                />
              </a>

              <a
                href="https://github.com/aljaplatt"
                className={style.socialLink}
                id="github"
                title="github"
              >
                <Icon
                  icon="fontisto:github"
                  className={style.socialLogo}
                  alt="github"
                />
              </a>

              <a
                href="https://twitter.com/webDevAl"
                className={style.socialLink}
                id="twitter"
                title="Twitter"
                alt="Twitter"
              >
                <Icon icon="logos:twitter" className={style.socialLogo} />
              </a>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Contact;
