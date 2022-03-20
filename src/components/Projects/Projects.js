import React from "react";
import style from "./projects.module.css";
import bookWorm from "../../img/book-worms.jpg";

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
      </section>
    </div>
  );
};

export default Projects;
