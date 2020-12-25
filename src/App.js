import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Canvas from './components/Canvas/canvas'
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/landing/landing";
import FirstPage from "./components/FirstPage/firstpage";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
      <FirstPage/>
      {/* <Canvas/> */}
        {/* Section for navbar */}
        {/* <Landing/> */}
        {/* <Navbar /> */}
        {/* Section for about */}
        {/* Section for projects */}
        {/* Section for contact */}
      </>
    );
  }
}

export default App;
