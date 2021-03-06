import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Canvas from "./components/Canvas/canvas";
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/landing/landing";
import FirstPage from "./components/FirstPage/firstpage";
import About from "./components/About/about";
import Project from "./components/Projects/project";
import Footer from "./components/Footer/footer";
import "./app.css";

class App extends React.Component {
  //   window.onscroll = function() {myFunction()};

  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;

  // window.addEventListener('onscroll',function(){
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }

  // });

  // <div class="bar flex">
  //               <div class="bar fill" style="width:90%">
  //                 <div class="tag bold flex">HTML</div>
  //               </div>
  //               <span>90%</span>
  //             </div>


  render() {
    return (
      <>
      {/* <Navbar />
        <FirstPage /> */}
        
        <main>
          <About />
          <Project />
          
        </main>
        <footer>
        <Footer />
        </footer>
      </>
    );
  }
}

export default App;
