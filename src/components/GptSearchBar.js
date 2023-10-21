import React, { useRef } from "react";
import { translation } from "../utils/translation";
import { useDispatch, useSelector } from "react-redux";
import { openai } from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, addGptSearchedMovieNames } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageLocale = useSelector((store) => store?.config?.lang);
  const gptSearchText = useRef(null);
  const dispatch=useDispatch();

  // search movie in tmdb database 
  const searchMoviesTMDB=async (movie)=>{
   const data= await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
 const json=await data.json();
 return json.results;
  }
// handle the gpt search
  const handleGptSearch = async () => {
    // console.log(gptSearchText.current.value);
    // make an api call to gpt api and get the movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for  the query:" +
      gptSearchText.current.value +
      "only give me the the names of five movies separated by comma like the example given ahead. Example - koi mil gya golmaal, yeh jawani hai deewani,chup chupke, 3 idiots";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptSearchedMovies =
      gptSearchResults?.choices[0]?.message?.content.split(",");
    if (!gptSearchResults.choices) {
      // to do the error handling later
    }

    // console.log("movies choices", gptSearchResults.choices);
    console.log("movies seaarched", gptSearchedMovies);
    dispatch(addGptSearchedMovieNames(gptSearchedMovies));

    // for each movie recieved from gpt search, search the data in teh tmdb database
    const promiseArray=gptSearchedMovies.map(movie=>searchMoviesTMDB(movie))
    const tmdbResults=await Promise.all(promiseArray);
    console.log("tmdb searched results", tmdbResults )
    dispatch(addGptMovieResult(tmdbResults))


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
