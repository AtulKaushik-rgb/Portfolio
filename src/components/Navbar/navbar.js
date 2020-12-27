import React from "react";
//import './navbar.css'
import styles from "./navbar.module.css";


const navbar = () => {
  return (
    <>
      <div className = "section-1">
        <div id="nav-section" className={styles.navbarlist}>
          <div className={styles.container}>
            <nav className={styles.stickyNav}>
              <ul>
                <li>
                  <a href="#experience">Home</a>
                </li>
                <li>
                  <a href="index.html">About</a>
                </li>
                <li>
                  <a href="index.html">Projects</a>
                </li>
                <li>
                  <a href="index.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

{/* Section 1 */}


{/* <section className={styles.container}> */}

  {/* <div className={}></div>
  <div className="progress">
  <div className="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}

{/* </section> */}

      </div>
    </>
  );
};

export default navbar;
