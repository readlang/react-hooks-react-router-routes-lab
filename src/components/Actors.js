import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(x=>( 
      <div key={x.name} > 
        <h2>{x.name}</h2>
        <ul>
          {x.movies.map(y=>(
            <li key={y}>{ y }</li>
          ))}
        </ul>
      </div>
    ))}

  </div>;
}

export default Actors;
