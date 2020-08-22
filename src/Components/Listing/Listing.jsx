import React, {useState, useEffect} from "react";
import { bool} from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import movieApiInstance from"../../utils/movieAPIInstance"
import {TOP_RATED} from "../../utils/constants";
import getConfig from "next/config"
import styles from "./Listing.module.css"
import Loading from "./Assets/Loading";

const { publicRuntimeConfig } = getConfig();
const {
  MOVIE_API_KEY,
} = publicRuntimeConfig;


const Listing = ({home}) => {
  const[movieList, setMovieList] = useState([]);



  const getPrevWatchList = async () =>{
    const  prevWatchList = await JSON.parse(localStorage.getItem("watchList")) || [];
    try{
      setWatchList(prevWatchList)
    }catch(e){
      console.log(e)
    }

  };

  const [watchList, setWatchList]  = useState ([]);
  const [isLoading, setIsLoading]= useState(false);
  const[currentPage, setCurrentPage]  = useState(1);


  const  getInitialMovies = async page => {
    const  savedMovieList = await localStorage.getItem("movieList") ;
    console.log(savedMovieList);
    const  actualPage = await JSON.parse(localStorage.getItem("currentPage")) || [1];
    if(savedMovieList){
      setMovieList(savedMovieList)
    }else{
      getMovies(1)
    }

  };

  const getMovies = async(page)=>{
    try {
      const response = await movieApiInstance().get(TOP_RATED(page,  MOVIE_API_KEY));
      setIsLoading(false);
      console.log("response", response)
      const newList = movieList.concat(response.data.results);
      setMovieList(newList);
      localStorage.setItem("movieList", JSON.parse(newList))
    }
    catch (e) {
      console.warn(e)
    }
  };

  useEffect(()=>{
      getInitialMovies();
      getPrevWatchList();
  }, []);

  return (
      <div className={styles.mainContainer}>
      <div className={styles.listingContainer}>
        {movieList.map((movie, index)=>{
            return(
            <MovieCard
                title={movie.title}
                key={`${movie.id}-${index}`}
                imageURL={movie.poster_path}
                genres={movie.genre_ids}
                date={movie.release_date}
                rate={movie.vote_average}
                movieId={movie.id}
                addToWatchList={()=>{
                  const newList = watchList.concat(movie);
                  setWatchList(newList);
                  localStorage.setItem("watchList", JSON.stringify(newList))
                }}
                watchList={watchList}
            />
        )})}
      </div>
        <button className={styles.button}
          onClick={()=>{
            setIsLoading(true)
            const newPage = currentPage + 1
            console.log(newPage)
            setCurrentPage(newPage)
              getMovies(newPage)
          }}
        >
          {isLoading ? <Loading/>: <p>Load more ...</p>}
        </button>
      </div>
  );
};
Listing.propTypes = {
  home: bool
};
Listing.defaultProps = {
  home: false
};
export default Listing;
