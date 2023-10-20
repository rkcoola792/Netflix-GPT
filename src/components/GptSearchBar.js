import React, { useRef } from "react";
import { translation } from "../utils/translation";
import { useSelector } from "react-redux";
import { openai } from "../utils/openAI";

const GptSearchBar = () => {
  const languageLocale = useSelector((store) => store?.config?.lang);
  const gptSearchText = useRef(null);

  const handleGptSearch = async () => {
    console.log(gptSearchText.current.value);
    // make an api call to gpt api and get the movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for  the query:" +
      gptSearchText.current.value +
      "only give me the the names of five movies separated by comma like the example given ahead. Example - koi mil gya golmaal, yeh jawani hai deewani,chup chupke, 3 idiots";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptSearchedMovies = gptSearchResults?.choices[0]?.message?.content;
    if(!gptSearchResults.choices){
      // tod do the error handling later
    }
    console.log("movies choices",gptSearchResults.choices)
    console.log("movies seaarched",gptSearchedMovies.split(","))
  };

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/2 bg-black grid grid-cols-12 rounded "
        >
          <input
            ref={gptSearchText}
            className="col-span-9 p-4 m-4"
            type="text"
            placeholder={translation[languageLocale].gptSearchPlaceHolder}
          ></input>
          <button
            onClick={handleGptSearch}
            className="col-span-3 bg-red-700 text-white m-4 rounded-md"
          >
            {translation[languageLocale].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
