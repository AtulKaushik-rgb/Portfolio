import React from "react";
import styles from "../Footer/footer.module.css";
import resume from '../../../public/assets/resume.svg'

const footer = () => {
  return (
    <section id="footer">
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid_container}>
            <div className={styles.form}>
              <div className={styles.connect}>
                <h1 className={styles.contact_name}>Contact</h1>
                <h5>Have a question or want to work together?</h5>
                <input type="text" placeholder="Name" ></input>
                <input type="email" placeholder="Email"></input>
                <textarea className={styles.textarea} name="textarea"  placeholder="Your message"></textarea>
                <button>Done!</button>
              </div>
            </div>
            <div className={styles.socials}>
              <img src={resume} alt="resume"></img>
              
              <a href="/public/assets/resume.svg" download><i class="fa fa-download" aria-hidden="true"></i>Resume</a>
            </div>
            <div className={styles.socialFooter}>
              <div><i class="fa fa-linkedin" aria-hidden="true"></i></div>
              <div><i class="fa fa-github" aria-hidden="true"></i></div>
              <div><i class="fa fa-facebook" aria-hidden="true"></i></div>
              <div><i class="fa fa-instagram" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
