import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from "axios";

function Movies() {

    const[movies, setMovies] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=de2560159f243c55611789d8b2f7b451&language=en-US'
        ).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        });
    },[])
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