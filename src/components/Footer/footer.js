import React from "react";
import styles from "../Footer/footer.module.css";

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
              </div>
            </div>
            <div className={styles.socials}>
              <div>
                <span>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
              <div>
                <span>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
              <div>
                <span>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
