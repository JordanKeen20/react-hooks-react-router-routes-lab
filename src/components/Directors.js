import React from "react";
import { directors } from "../data";


function Directors() {
  const retreiveDirectors = directors.map((director) =>(
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      <h4> Movies: </h4>
      <ul>
        {director.movies.map((movie) =>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return ( 
  <div>
    <h1> Directors Page </h1> 
    {retreiveDirectors}   
  </div>
  );
}

export default Directors;
