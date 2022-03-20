import React from "react";
import style from "./tech.module.css";
import { Icon } from "@iconify/react";

const Tech = () => {
  return (
    <section className={style.componentContainer}>
      <div className={style.TechStackSection}>
        <h2 className={style.title}>tech</h2>
        <div className={style.paraContainer}>
          <p id="tech">
            This is a list of tech I use on a regular basis, however I love
            learning and will always embrace new tools.{" "}
          </p>
        </div>
        <section id="tech-stack-container" className={style.techContainer}>
          <figure className={style.skill}>
            <Icon
              icon="vscode-icons:file-type-html"
              alt="HTML logo"
              className={style.logo}
            />
            <figcaption className={style.skillName}>html</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="vscode-icons:file-type-css"
              alt="CSS logo"
              className={style.logo}
            />
            <figcaption class={style.skillName}>css</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="vscode-icons:file-type-js-official"
              alt="JS logo"
              className={style.logo}
            />
            <figcaption className={style.skillName}>javaScript</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="logos:typescript-icon"
              alt="Typescript logo"
              className={style.logo}
            />
            <figcaption className={style.skillName}>typeScript</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="la:node"
              alt="NodeJS logo"
              className={style.logo}
              style={{ color: "white" }}
            />
            <figcaption className={style.skillName}>node.js</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon icon="logos:react" alt="React logo" className={style.logo} />
            <figcaption className={style.skillName}>react</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon icon="logos:git-icon" alt="GIT logo" className={style.logo} />
            <figcaption className={style.skillName}>git</figcaption>
          </figure>

          {/* <figure className={style.skill}>
            <Icon icon="logos:npm-icon" alt="NPM logo" className={style.logo} />
            <figcaption class={style.skillName}>npm</figcaption>
          </figure> */}

          <figure className={style.skill}>
            <Icon
              icon="logos:postgresql"
              alt="postgreSQL logo"
              className={style.logo}
            />
            <figcaption className={style.skillName}>postgreSQL</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="logos:heroku-icon"
              alt="Heroku logo"
              className={style.logo}
              style={{ color: "white" }}
            />
            <figcaption className={style.skillName}>heroku</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="logos:netlify"
              alt="Netlify logo"
              className={style.logo}
            />
            <figcaption className={style.skillName}>netlify</figcaption>
          </figure>

          {/* <figure className={style.skill}>
            <Icon
              icon="logos:postman-icon"
              alt="Postman logo"
              className={style.logo}
            />
            <figcaption class={style.skillName}>postman</figcaption>
          </figure> */}

          <figure className={style.skill}>
            <Icon icon="vscode-icons:file-type-jest" className={style.logo} />
            <figcaption className={style.skillName}>jest</figcaption>
          </figure>

          <figure className={style.skill}>
            <Icon
              icon="logos:cypress"
              alt="Cypress logo"
              className={style.logo}
            />
            <figcaption class={style.skillName}>cypress</figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default Tech;
