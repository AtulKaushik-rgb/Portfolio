import React from "react";
import styles from '../Projects/project.module.css'

const project = () => {
  return (
    <section id="project" className={styles.project}>
      <h1>Projects</h1>
      <div className="container">
        <div>
        <nav class="nav nav-tabs nav-stacked">
          <a class="nav-link active" href="#">Active link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link " href="#">Disabled link</a>
        </nav>
        </div>
        <div className={styles.All}>All</div>
        <div className={styles.Front}>FrontEnd</div>
        <div className={styles.Backend}>Backend</div>
      </div>
    </section>
  );
};

export default project;
