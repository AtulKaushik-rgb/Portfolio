import React from "react";
import styles from "../Projects/project.module.css";

import devicon from "../../../public/assets/developer.svg";

const project = () => {
  return (
    <section id="project" className={styles.project}>
      <div className={styles.container}>
        <div className={styles.flex_row}>
          <div className={styles.filter} data-filter="all">
            ALL
          </div>
          <div className={styles.filter} data-filter=".rails">
            FRONT-END
          </div>
          <div className={styles.filter} data-filter=".react">
            BACKEND
          </div>
        </div>
        <div className={styles.filter_container}>
          <div className={styles.All}>
            <div className={styles.allGrid}>
              <img src={devicon} alt="projText"></img>
              <img src={devicon} alt="projText"></img>
              <img src={devicon} alt="projText"></img>
              <img src={devicon} alt="projText"></img>
            </div>
          </div>
          <div className={styles.Front}>
            <div className={styles.otherfilters}>
              <img src={devicon} alt="projText"></img>
              <img src={devicon} alt="projText"></img>
            </div>
          </div>
          <div className={styles.Back}>
            <div className={styles.otherfilters}>
              <img src={devicon} alt="projText"></img>
              <img src={devicon} alt="projText"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default project;
