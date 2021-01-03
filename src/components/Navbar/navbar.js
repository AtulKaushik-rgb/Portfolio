import React,{useState} from "react";
//import './navbar.css'
import styles from "./navbar.module.css";


const navbar = () => {


  const href=window.location;
  const [showNav,setShowNav] = useState(false);

  // $(document).on('scroll', function() {
  //   if ($(this).scrollTop() >= $('#theTarget').position().top) {
  //     console.log('I have been reached');
  //   }
  // })

  //let elementTarget = document.querySelector('');
  //let elementTarget = document.getElementById('#about');
  // let elementTarget = document.querySelector("#nav-section");

  // console.log(elementTarget);


  // console.log(document);

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("about");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
       // alert("You've scrolled past the second div");
       console.log('scrolled',window.scrollY)
       if(!showNav)
       {
         console.log(showNav)
        setShowNav({showNav:true})
       }
       
        
    }
  });

  // window.addEventListener('scroll',()=>{
  //   console.log(window.location)
  // })

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
  let navStyleShow = styles.navbarlist;
  let navStyleHide = styles.navbarlist + styles.hide;

  return (

    
    <>
      <div className = "section-1">
      {/* <div id="nav-section"  className={` ${sticky ? ${styles.description} ${styles.yellow} } `}> */}
      <div id="nav-section"  className={`${showNav ?navStyleShow:''}`}>
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
      </div>
    </>
  );
};

export default navbar;
