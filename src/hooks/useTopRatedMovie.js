import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovie = () => {

      const dispatch = useDispatch()
    

    //Fetch Data from TMDB API and update the store.
    const getTopRatedMovie = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
      };
    
    
      useEffect(() => {
        getTopRatedMovie();
      }, []);
}


export default useTopRatedMovie;