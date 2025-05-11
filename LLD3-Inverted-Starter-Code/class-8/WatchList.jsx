import { useEffect } from "react";
import { useState } from "react";
import genreids from "../assets/genre";

function WatchList() {
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const handleAscnedingRatings = () => {
    console.log("arranging movies by ascending order");
  };

  const handleDescendingRatings = () => {
    console.log("arranging movies by descending order");
  };

  const removeFromWatchList = (movie) => {
    console.log("removing movie from watchlist");
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
    // also fetch the genre list
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {/* Genre */}
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              // setup styling for genre tags conditionally
              className={
                "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* Search Field */}
      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <i
                  onClick={handleAscnedingRatings}
                  className="fa-solid fa-arrow-up"
                ></i>
                <div>Ratings</div>
                <i
                  onClick={handleDescendingRatings}
                  className="fa-solid fa-arrow-down"
                ></i>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movie) => (
            <tr className="hover:bg-gray-50" key={movie.id}>
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img
                  className="h-[6rem] w-[10rem] object-fit"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
                <div className="font-medium text-gray-700 text-sm">
                  {movie.title}
                </div>
              </td>
              <td className="pl-6 py-4">{movie.vote_average}</td>
              <td className="pl-6 py-4">{movie.popularity}</td>
              <td className="pl-2 py-4">{genreids[movie.genre_ids[0]]}</td>
              <td
                onClick={() => removeFromWatchList(movie)}
                className="text-red-500"
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;
