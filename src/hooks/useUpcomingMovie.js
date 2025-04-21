import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovie = () => {

      const dispatch = useDispatch()
    

    //Fetch Data from TMDB API and update the store.
    const getUpcomingMovie = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
      };
    
    
      useEffect(() => {
        getUpcomingMovie();
      }, []);
}


export default useUpcomingMovie;