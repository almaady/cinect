import React, {useState, useEffect} from "react";
import {number, string, func} from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import movieApiInstance from"../../utils/movieAPIInstance"
import {genresIDs, TOP_RATED} from "../../utils/constants";
import getConfig from "next/config";
import styles from "./Listing.module.css"

const { publicRuntimeConfig } = getConfig();
const {
  MOVIE_API_KEY,
} = publicRuntimeConfig;


const Listing = ({home}) => {
  const[movieList, setMovieList] = useState([])



  useEffect(()=>{
    const  prevWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    setWatchList(prevWatchList)
    console.log(prevWatchList)
  },[]);

  useEffect(()=>{
    if(home){
      getMovies(1)
    }else{
      setMovieList(watchList)
    }
  }, []);


  const [watchList, setWatchList]  = useState ([])
  const[currentPage, setCurrentPage]  = useState(1)

  const  getMovies = async page => {
    console.log(movieApiInstance())
    try {
      const response = await movieApiInstance().get(TOP_RATED(1,  MOVIE_API_KEY));
      setMovieList(response.data.results)
    }
    catch (e) {
      console.warn(e)
    }
  }

  return (
      <div className={styles.mainContainer}>
      <div className={styles.listingContainer}>
        {movieList.map((movie)=>(
            <MovieCard
                title={movie.title}
                image={movie.poster_path}
                genres={movie.genre_ids}
                date={movie.release_date}
                rate={movie.vote_average}
                movieId={movie.id}
                addToWatchList={()=>{
                  const newList = watchList.concat(movie)
                  setWatchList(newList)
                  localStorage.setItem("watchList", JSON.stringify(newList))
                }}
                watchList={watchList}
                home={home}
            />
        ))}
      </div>
        {home &&
        <button>
          <p>AAAAH</p>
        </button>}
      </div>
  );
};
Listing.propTypes = {};
Listing.defaultProps = {};
export default Listing;
