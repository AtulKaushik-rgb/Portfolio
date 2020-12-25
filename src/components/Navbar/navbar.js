import React from "react";
//import './navbar.css'
import styles from './navbar.module.css'

const navbar = () => {

  return (
    <>
    
        <div className={styles.container}>
        <div id="nav-section" className={styles.navbarlist}>
          <nav >
            <ul>
              <li ><a href="index.html">Home</a></li>
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html">Home</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default navbar;
