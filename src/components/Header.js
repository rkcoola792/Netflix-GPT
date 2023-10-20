import React, { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {  LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { DEFAULT_PROFILE_PIC } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {

  const gpt=useSelector(store=>store.gpt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const language=useRef();
  const showGptSearch = useSelector((store) => store.gpt.initialState);
  console.log(showGptSearch);

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

  const handleGpt=()=>{
    // toggle gpt search
    dispatch(toggleGptSearchView());
  }
const handleLanguageChange=(e)=>{
dispatch(changeLanguage(e.target.value))
}

  return (
    <div className="header-container z-20 absolute bg-transparent bg-gradient-to-b from-black w-full h-28 flex justify-between">
      <div>
        <img className="absolute w-48 m-1 p-1 " src={LOGO}></img>
      </div>
      {user && (
       <div className="right-part-header m-4 p-4 flex ">
       {showGptSearch &&  <select onChange={handleLanguageChange} className="p-1 m-1 bg-transparent text-white cursor-pointer">
            {SUPPORTED_LANGUAGES.map(lang => 
              <option className="bg-gray-600" key={lang.identifier} value={lang.identifier} >{lang.name}</option>
          )}
          </select>}
          <button className="mx-2 p-1 text-white" onClick={handleGpt}>
            {showGptSearch?"Home": "NetflixGPT"}
          </button>
          <button
            className="text-white cursor p-1 mx-2"
            onClick={handleSignOut}
          >
            Sign-out
          </button>
          <img className="p-1 mx-2  rounded-lg" src={DEFAULT_PROFILE_PIC}></img>
        </div>
      )}
    </div>
  );
};

export default Header;
