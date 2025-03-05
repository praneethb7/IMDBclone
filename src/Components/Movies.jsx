import React, {useEffect, useState} from "react";
import Card from "./Card";


function Movies({movies, loading}) {

   
    return (
        <main className="bg-[#121212] mt-[-20px]">
           <div className="text-2xl font-bold text-center m-5 text-[#CCC9DC]">
            <h1>Trending Movies</h1>
           </div>
           <div className="flex justify-evenly flex-wrap gap-8">
            {(loading==true)?<h1>Loading...</h1>: movies.map((movieObj)=>(
                <Card movieObj={movieObj}/>
            ))}
           </div>
        </main>
    )
}

export default Movies;