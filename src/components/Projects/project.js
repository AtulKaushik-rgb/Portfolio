import React from "react";
import styles from '../Projects/project.module.css'

const project = () => {
  return (
    <section id="project" className={styles.project}>
      <div className="container">
        <nav class="nav nav-tabs nav-stacked">
          <a class="nav-link active" href="#">
            All
          </a>
          <a class="nav-link" href="#">
            JS
          </a>
          <a class="nav-link disabled" href="#">
            React
          </a>
        </nav>
      </div>
    </section>
  );
};

export default project;
