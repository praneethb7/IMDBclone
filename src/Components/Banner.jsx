import React from "react";
function Banner({movies}) {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <>
      <div
        className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})`,
        }}
      >
        <div className="text-[#CCC9DC] text-2xl mb-[30px] bg-gray-900/70 p-2 transition duration-500 rounded inline-block">
          {randomMovie.title}
        </div>
      </div>
    </>
  );
}

export default Banner;