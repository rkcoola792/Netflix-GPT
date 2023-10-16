import React, { useState } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate} from "react-router-dom";

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  console.log("store",user)

  const handleSignOut=()=>{
signOut(auth)
  .then(() => {
    // Sign-out successful.
    dispatch(removeUser())
    navigate("/")
  })
  .catch((error) => {
    // An error happened.
   navigate("/error")  
    
  });
  }
  
  return (
    <div className="header-container z-20 absolute bg-transparent bg-gradient-to-b from-black w-full h-28 flex justify-between">
      <div>
        <img
          className="absolute w-48 m-1 p-1 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
        ></img>
      </div>
      {user && (
        <div className="right-part-header m-4 p-4 flex ">
          <img className="p-1 mx-2 " src="https://occ-0-3240-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTznvQlDlb-DTY57Bj9r25bgufQrWczbgk5vxk1gOjBtI9GDbRZrOohvgoY3gzb1b7GnSTJ5Ly0_xl-MOQGQJD8nYZ3bwoc.png?r=a16"></img>
          <button className="text-white cursor" onClick={handleSignOut}>
            Sign-out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
