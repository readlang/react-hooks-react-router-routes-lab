import React from "react";
import { movies } from "../data";

function Movies() {
  return( 
    <div>
      <h1>Movies Page</h1>
      {movies.map(x=>(<div key={x.title} >
        <h2>{x.title}</h2> 
        <p>Time: {x.time}</p>
        <ul>
          {x.genres.map(y=>(
            <li key={y} >{y}</li>
          )) }
        </ul>
        
      </div>)) }
    </div>
  )
}

export default Movies;