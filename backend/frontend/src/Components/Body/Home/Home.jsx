import React, { Fragment } from "react";

import { HomeContent } from "../Components/Body/Home";
import { Hero } from "./Hero";

// STYLE
import "./home.css"

function Home() {
  return (
    <Fragment>
      <Hero />
      <hr />
      {/* <h1 className="my-5 text-center h-1"> The Best That Money Can Buy! </h1> */}
      <HomeContent />
    </Fragment>
  );
}

export default Home;
