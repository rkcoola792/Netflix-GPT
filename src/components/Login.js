import React, { useState } from "react";
import Header from "./Header";


const Login = () => {
  const [signedUp, setSignedUp] = useState(true);
  return (
    <div className="relative ">
      <Header></Header>

      <img
        className="main-img absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="main-background-image"
      ></img>

      <form className="login-form  w-4/12 flex flex-col mx-auto top-40 left-0 right-0  rounded-md absolute bg-black p-8 bg-opacity-80  ">
        <h1 className="text-white text-3xl font-bold m-4 ">
          {" "}
          {signedUp ? "Sign In" : "Sign Up"}
        </h1>
        <input
          placeholder="Email or phone number"
          type="email"
          className="p-4 m-4  bg-gray-700 rounded-lg"
        ></input>
        <input
          placeholder="Password"
          type="password"
          className="p-4 m-4 bg-gray-700 rounded-lg"
        ></input>
        {!signedUp && (
          <input
            placeholder="Confirm password"
            type="password"
            className="p-4 m-4 bg-gray-700 rounded-lg"
          ></input>
        )}

        <button className="bg-red-700 m-4 p-4 rounded-lg text-white">
          {signedUp ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between">
          <div className="bottom-container mx-4 ">
            <input type="checkbox" className="mx-1 "></input>
            <span className="text-gray-400">Remember me</span>
          </div>
          <span className="text-gray-400">Need help?</span>
        </div>

        <div>
          {signedUp ? (
            <h2 className="text-gray-400 mx-4 mt-10 text-center cursor-pointer ">
              New to netflix?
              <span 
                
                className="text-white mx-1 "
                onClick={() => setSignedUp(!signedUp)}
              >
                Sign Up now
              </span>
            </h2>
          ) : (
            <h2 className="text-gray-400 mx-4 mt-10 text-center cursor-pointer ">
              Already a user?
              <span
                
                className="text-white mx-1 "
                onClick={() => setSignedUp(!signedUp)}
              >
                Sign In now
              </span>
            </h2>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
