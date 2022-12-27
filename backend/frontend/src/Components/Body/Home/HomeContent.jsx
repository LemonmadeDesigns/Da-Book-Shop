import React from "react";

// STYLE
import "./home.css"

const HomeContent = () => (
  <>
  <h1 className="my-5 text-center h-1"> The Best That Money Can Buy! </h1>
    <div className="next-steps">
      {/* <h1 className="my-5 text-center h-1"> Da' Book Stop </h1> */}

      

      {/* <div className="space"> */}
        <div className="col-md-5 mb-4">
          <div className="boxed-in">
            <img className="home-photo" src="https://pictures.abebooks.com/isbn/9780385542432-us.jpg" alt={"Hotel"} />
          </div>
        </div>

        {/* <div className="col-md" /> */}

        <div className="col-md-5 mb-4">
          <div className="boxed-in">
            <img className="home-photo" src="https://pictures.abebooks.com/isbn/9780393608533-us.jpg" alt={"Hotel"} />
          </div>
        </div>
      {/* </div> */}

      {/* <div className="no-space"> */}

        <div className="col-md-5 mb-4">
          <div className="boxed-in">
            <img className="home-photo" src="https://pictures.abebooks.com/isbn/9781785769405-us.jpg" alt={"Hotel"} />
          </div>
        </div>

        {/* <div className="col-md" /> */}

        <div className="col-md-5 mb-4">
          <div className="boxed-in">
            <img className="home-photo" src="https://pictures.abebooks.com/isbn/9780525479352-us.jpg" alt={"Hotel"} />
          </div>
        </div>
        
      {/* </div> */}
    </div>
  </>
);

export default HomeContent;
