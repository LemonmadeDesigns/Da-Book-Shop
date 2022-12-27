import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {

  const { loginWithRedirect, logout, user, isLoading } = useAuth0()

  return (
    <>
      <div>
        <button onClick={() => loginWithRedirect()}> Log In
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
        </button>
      </div>
    </>
  )
};

export default LoginButton;
