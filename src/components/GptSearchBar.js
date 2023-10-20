import React from 'react'
import { translation } from '../utils/translation';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
  const languageLocale=useSelector(store=>store?.config?.lang)
  
  console.log("gpt search holder" ,languageLocale)
  return (
    <>
      <div className="flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 rounded ">
          <input
            className="col-span-9 p-4 m-4"
            type="text"
            placeholder={translation[languageLocale].gptSearchPlaceHolder}
          ></input>
          <button className="col-span-3 bg-red-700 text-white m-4 rounded-md">
            {translation[languageLocale].search}
          </button>
        </form>
      </div>
    </>
  );
}

export default GptSearchBar
