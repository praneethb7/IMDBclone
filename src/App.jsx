import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import MovieRecommendations from "./Components/MovieRecommendations";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import Banner from "./Components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Pagination from "./Components/Pagination";

function App() {

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const[page,setPage] = useState(1);

  function pageNext(){
    setPage(page=>page+1)
  }
  function pagePrev(){
    if(page>1){
      setPage(page=>page-1)
    }
  }

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=de2560159f243c55611789d8b2f7b451&&language=en-US&page=${page}`
    ).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results)
      setLoading(false)
    })
      .catch((err) => {
        console.log(err)
      });
  }, [page])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/mv' element={
            <>
              {(loading == true) ? <h1>Loading...</h1> : <Banner movies={movies} />}
              <Movies movies={movies} loading={loading} />
              <Pagination pageNext={pageNext} pagePrev={pagePrev} page={page}/>
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