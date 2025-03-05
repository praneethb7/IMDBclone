import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import MovieRecommendations from "./Components/MovieRecommendations";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import Banner from "./Components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=de2560159f243c55611789d8b2f7b451&language=en-US'
    ).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
      setLoading(false)
    })
      .catch((err) => {
        console.log(err)
      });
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/mv' element={
            <>
              {(loading == true) ? <h1>Loading...</h1> : <Banner movies={movies} />}
              <Movies movies={movies} loading={loading} />
            </>
          } />
          <Route path='/wL' element={<WatchList />} />
          <Route path='/recc' element={<MovieRecommendations />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App;