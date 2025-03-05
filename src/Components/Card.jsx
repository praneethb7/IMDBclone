import React from "react";

function Card({movieObj}) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-105 duration-300"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObj.title}
      </div>
    </div>
  );
}

export default Card;