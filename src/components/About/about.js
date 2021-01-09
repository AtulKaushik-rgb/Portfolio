import React, { Component } from 'react'
import styles from './about.module.css'
import devicon from '../../../public/assets/developer.svg'
import javascript from '../../../public/assets/javascript/javascript-original.svg'
import css3 from '../../../public/assets/css3/css3-original.svg'
import bootstrap from '../../../public/assets/bootstrap/bootstrap-plain.svg'
import csharp from '../../../public/assets/csharp/csharp-original.svg'
import reacticon from '../../../public/assets/react/react-original.svg'
import htmlicon from '../../../public/assets/html5/html5-original.svg'
import express from '../../../public/assets/express/express-original.svg'
import mongodb from '../../../public/assets/mongodb/mongodb-original.svg'
import nodejs from '../../../public/assets/nodejs/nodejs-original.svg'
import Navbar from '../Navbar/navbar'
import Skills from '../../components/Skills/skills'

export class about extends Component {
    render() {
        return (
          <section id = "about">
            <div className={styles.container}>
              <div className={styles.grid_container}>
                <div className={styles.intro}>
                  <img src={devicon} className={styles.icons}></img>
                  <h1 className={styles.textColor}>Who's this guy?</h1>
                  <h6 className={styles.textColor}>
                    I'm a Full Stack Developer I have serious passion for
                    Javascript, React and MERN Stack. 
                    <a href='#'>Let's  work together.</a>
                  </h6>
                </div>

                <div className={styles.techno}>
                  <h1 className={styles.techTitle}>Tech Stack</h1>
                  <Skills/>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default about
