import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
// import { Container } from "reactstrap";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLemon } from '@fortawesome/fontawesome-free-solid'

const MainNav = () => {

  const { loginWithRedirect, logout, user, isLoading } = useAuth0()

  return (
    <div className="navbar-nav mr-auto myNav">

      <div className="myContainer myCon-1">
        
        <h1 className="logo"> Da
        {/* <FontAwesomeIcon id="lemon" icon={faLemon} /> */}
         Book Stop </h1>
      </div>

      <div className="myContainer myCon-2">
        <NavLink
          to="/"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/Profile"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          About Us
        </NavLink>

        <NavLink
          to="/Shop"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          Shop
        </NavLink>

        <NavLink
          to="/ShoppingCart"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          Cart
        </NavLink>

        {/* <NavLink
      to="/Products"
      exact="true"
      className="nav-link"
      activeclassname="router-link-exact-active"
    >
      Products
    </NavLink> */}


        <div>
          {!isLoading && !user && (
            <button
              className="btn btn-primary btn-block"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
          {!isLoading && user && (
            <button
              className="btn btn-primary btn-block"
              onClick={() => logout()}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  )
};

export default MainNav;
