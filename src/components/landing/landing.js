import React from "react";
import "./landing.css";

const landing = () => {
  return (
    <>
      <div className="landing">
        <div className="cover">
          <h1 className="jumbo-xl heading">
            Hello, I'm <span className="name-span">Atul Kaushik</span>
          </h1>
         
          <h1 className="jumbo-l">I'm a full stack web developer</h1>

          {/* <p className="lead"> */}
            <a
              className="btn"
              href="#nav-section"
              role="button"
            >
              View my work <span className="change-icon">
              {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </span>
            </a>
          {/* </p> */}
        </div>
      </div>
    </>
  );
};

export default landing;
