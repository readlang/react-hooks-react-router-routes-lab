import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(x=>(
      <div key={x.name} > 
       <h2>{ x.name }</h2> 
       <ul>
         {x.movies.map(y=>(
           <li key={y} > {y} </li>
         ))}
       </ul>
      </div>
    ))}
  </div>;
}

export default Directors;
