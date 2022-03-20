import React from "react";
import style from "./projects.module.css";
import bookWorm from "../../img/book-worms.jpg";
import portfolio from "../../img/portfolioImg.png";
import mastermind from "../../img/mastermind.png";

const Projects = () => {
  return (
    <div className={style.projectSectionContainer} id="projects">
      <h2 className={style.sectionTitle}>projects</h2>
      <p className={style.projectName}>
        Click the projects below to try them out
      </p>
      <section id="project-section" className={style.projectContainer}>
        <section className={style.projectWrapper}>
          <a
            href="https://bookwormspreview.netlify.app/"
            className={style.projectLink}
          >
            <img
              src={bookWorm}
              alt="project"
              className={style.projectImg}
            ></img>
          </a>
          <p className={style.projectName}>Book Worms</p>
        </section>
        <section className={style.projectWrapper}>
          <a href="https://webdeval.netlify.app/" className={style.projectLink}>
            <img
              src={portfolio}
              alt="portfolio"
              className={style.projectImg}
            ></img>
          </a>
          <p className={style.projectName}>My first 'freeCodeCamp' portfolio</p>
        </section>
        <section className={style.projectWrapper}>
          <a
            href="https://socmastermindquiz.netlify.app/"
            className={style.projectLink}
          >
            <img
              src={mastermind}
              alt="react quiz"
              className={style.projectImg}
            ></img>
          </a>
          <p className={style.projectName}>
            Coding themed, multiple choice quiz
          </p>
        </section>
      </section>
    </div>
  );
};

export default Projects;
