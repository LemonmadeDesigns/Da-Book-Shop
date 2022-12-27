import React from "react";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div id="spinner-icon" className="spinner">
    <img id="spinner-icon" src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
