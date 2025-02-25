import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?apikey=cef31aac";

const movie1 = {
  "Title": "Batman",
  "Year": "1989",
  "imdbID": "tt2586634",
  "Poster": "N/A"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="App">
      <h1>CineWorld</h1>

      <div className="search">
        <input 
          placeholder="Search Movies..."
          value= "Superman"
          onChange={() => {}}
         />
        <img 
          src = {SearchIcon}
          alt="Search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster :'https://placehold.co/400x600'} 
            alt={movie1.Title}/>
          </div>
        </div>
      </div>

    </div>
  )
};

export default App;
