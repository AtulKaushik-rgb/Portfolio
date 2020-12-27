import React,{useState} from "react";
//import './navbar.css'
import styles from "./navbar.module.css";


const navbar = () => {

  // const [sticky, setSticky] = useState(false);
 
  // let selected = false;
  
  // window.addEventListener("scroll", () => {
    
  //   const navbar = document.querySelector("#nav-section");
  //   const stick = navbar.offsetTop;
    
  //   if(window.pageYOffset >= stick && !sticky)
  //   {
  //     console.log(window.pageYOffset+'--'+sticky+"inside evt listener");
  //     setSticky(true)
  //   }

    // if (window.pageYOffset >= sticky) {
    //   console.log('offset y greater than sticky')
    //   // navbar.classList.add("sticky");
    //   selected = true;
    // } else {
    //   console.log('offset y less than sticky')
    //   // navbar.classList.remove("sticky");
    //   selected = false;
    // }
  // });

  return (
    <>
      <div className = "section-1">
      {/* <div id="nav-section"  className={` ${sticky ? styles.navbarlist:styles.sticky } `}> */}
      <div id="nav-section"  className={styles.navbarlist}>
          <div className={styles.container}>
            <nav className={styles.stickyNav}>
              <ul>
                <li>
                  <a href="#experience">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
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
