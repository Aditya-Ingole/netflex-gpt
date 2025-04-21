import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";


const usePopularMovie = () => {

      const dispatch = useDispatch()
    

    //Fetch Data from TMDB API and update the store.
    const getPopularMovie = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
      };
    
    
      useEffect(() => {
        getPopularMovie();
      }, []);
}


export default usePopularMovie;