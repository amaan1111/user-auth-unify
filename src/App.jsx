import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";
import React from "react";
import UserForm from "./UserForm";
function App() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    // console.log("Login Success:", res.profileObj);

    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    // console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <>
      <h1>User Authentication</h1>
      <div className="App">
        {showloginButton ? (
          <div className="button_signin">
            <GoogleLogin
              clientId="946600883822-sed00h2j1m28k5nec5qutenck8q7nol0.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        ) : (
          <UserForm />
        )}

        {showlogoutButton ? (
          <div className="button_signout">
            <GoogleLogout
              clientId="946600883822-sed00h2j1m28k5nec5qutenck8q7nol0.apps.googleusercontent.com"
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
