import React from "react";
import style from "./about.module.css";
import profile from "../../img/prof.jpg";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section className={style.aboutSection} id="about">
      <section className={style.aboutContainer}>
        <h2 className={style.intro}>hey, I'm Alex.</h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("software engineer - web developer")

              .start();
          }}
        />

        <section /*id="bio"*/ className={style.aboutMe}>
          <p className={style.aboutPara}>
            I'm a full-stack developer who loves to learn new tech and tackle
            interesting problems.
            {/* I began to code after exploring website builders to build a website
            for my Cafe & Catering business. */}
          </p>

          <p className={style.aboutPara}>
            After initially exploring website builders, I quickly understood
            that I would have to explore beyond these more restrictive services.
            I didn't want the zoo experience, I wanted the jungle!
          </p>
          <p className={style.aboutPara}>
            So my journey to becoming a software engineer began...
          </p>
          {/* <p className={style.parBio}>
            After completing a degree in Business IT and some years later a
            Masters in Sport & Exercise nutrition, with a board selection of
            jobs in between, I had finally found something I was both passionate
            about and could provide an exciting career.
          </p> */}
        </section>
      </section>
      <section /* id="personal-picture" */ class={style.picContainer}>
        <img src={profile} alt="profile" className={style.profilePic}></img>
      </section>
    </section>
  );
};

export default About;
