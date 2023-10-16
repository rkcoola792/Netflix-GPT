import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {
  const [signedUp, setSignedUp] = useState(true);
  const [message, setMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSubmit = () => {
    console.log("email", email.current.value);
    console.log("Password", password.current.value);

    const message = checkValidation(
      email.current.value,
      password.current.value
    );

    setMessage(message);

    if (!signedUp) {
      // sign in logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user",user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " - " + errorMessage);
        });
    } else {
       signInWithEmailAndPassword(
         auth,
         email.current.value,
         password.current.value
       )
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log("signed in user",user)
           // ...
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setMessage(errorCode + " - " + errorMessage);
         });
    }
  };
  return (
    <div className="relative ">
      <Header></Header>

      <img
        className="main-img absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="main-background-image"
      ></img>

      <form
        className="login-form  w-4/12 flex flex-col mx-auto top-28 left-0 right-0  rounded-md absolute bg-black p-8 bg-opacity-80"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl font-bold m-4 ">
          {" "}
          {signedUp ? "Sign In" : "Sign Up"}
        </h1>
        {!signedUp && (
          <input
            ref={fullName}
            placeholder="Full name"
            type="text"
            className="p-4 m-4 bg-gray-700 rounded-lg text-white"
          ></input>
        )}
        <input
          ref={email}
          placeholder="Email or phone number"
          type="email"
          className="p-4 m-4  bg-gray-700 rounded-lg text-white"
        ></input>
        <input
          ref={password}
          placeholder="Password"
          type="password"
          className="p-4 m-4 bg-gray-700 rounded-lg text-white"
        ></input>

        <button
          className="bg-red-700 m-4 p-4 rounded-lg text-white"
          onClick={handleSubmit}
        >
          {signedUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center text-red-600 mb-4 font-semibold">{message}</p>
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
