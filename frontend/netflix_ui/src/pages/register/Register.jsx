import React, { useState, useRef } from "react";
import "./register.scss";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const emailRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  }
  return (
    <>
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg "
              alt=""
            />

            <button className="logB">Sign In</button>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <br></br>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <br></br>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="text" placeholder="Email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="text" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start Membership
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
