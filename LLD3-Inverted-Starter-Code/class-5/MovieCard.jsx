import React from "react";

function MovieCard({ movieObj }) {
  return (
    // add the background image url
    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end">
      <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900/70">
        {/* add movie title here */}
      </div>
    </div>
  );
}

export default MovieCard;
