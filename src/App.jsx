import React from "react";
import Navbar from "./Components/Navbar";
import MovieRecommendations from "./Components/MovieRecommendations";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import Banner from "./Components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/mv' element={
            <>
              <Banner /> <Movies /> 
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