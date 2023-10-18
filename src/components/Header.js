import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {  LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  // we need to setup this event listener only once thats why we used useEffect
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // signs in or sings up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out

        dispatch(removeUser());
        navigate("/");
      }
    });

    // cleaning while unmounting unsubscribing
    return ()=>unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="header-container z-20 absolute bg-transparent bg-gradient-to-b from-black w-full h-28 flex justify-between">
      <div>
        <img
          className="absolute w-48 m-1 p-1 "
          src={LOGO}
        ></img>
      </div>
      {user && (
        <div className="right-part-header m-4 p-4 flex ">
          <img
            className="p-1 mx-2 "
            src={user.photoURL}
          ></img>
          <button className="text-white cursor" onClick={handleSignOut}>
            Sign-out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
