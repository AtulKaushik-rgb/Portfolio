import React,{useState} from "react";

import styles from  "./landing.module.css";

const landing = () => {

  const [hovered,setHovered] = useState(false);


  const rotateIcon = (e)=>{
    console.log(e.currentTarget)
    
      setHovered(!hovered)
    }
  
  const resetIcon = (e)=>{
    if(hovered)
      setHovered(!hovered)

  }

  return (
    <div className={styles.main}>
      <div className={styles.landing}>
        <div className={styles.cover}>
          <h1 className={`${styles.jumboxl} ${styles.heading}`}>
            Hello, I'm <span className={styles.namespan}>Atul Kaushik</span>
          </h1>
         
          <h1 className={styles.jumbol}>I'm a full stack web developer</h1>

          {/* <p className="lead"> */}
            <a
              className={styles.btn}
              href="#nav-section"
              role="button"
              onMouseEnter={rotateIcon}
              onMouseOut={resetIcon}
          
            >
              View my work 
              <span className={styles.changeicon} >
              <i className={hovered?'fa fa-instagram':'fa fa-arrow-right'} ></i>
              {/* <i class="fa fa-arrow-down" aria-hidden="true"></i> */}
                </span>
            </a>
          {/* </p> */}
        </div>
      </div>
    </div>
  );
};

export default landing;
