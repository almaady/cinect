import React, {useState, useEffect} from "react";
import {number, string, func, arrayOf, shape} from "prop-types";
import styles from "./WatchList.module.css"
import MovieCard from "../MovieCard/MovieCard";


const WatchList = ({}) => {
  const [moviesList, setMoviesList] = useState([]);
  const getPrevWatchList = async () =>{
    const  prevWatchList = await JSON.parse(localStorage.getItem("watchList")) || [];
    try{
      console.log(prevWatchList)
      setMoviesList(prevWatchList)
    }catch(e){
      console.log(e)
    }

  }

  useEffect(()=>{
      getPrevWatchList();
  }, []);


  return (
      <div className={styles.mainContainer}>
        <div className={styles.watchListContainer}>
          {moviesList.map((movie, index)=>{
            console.log(movie)
            return(
                <MovieCard
                    id={index}
                    title={movie.title}
                    key={`${movie.id}-${index}`}
                    image={movie.poster_path}
                    genres={movie.genre_ids}
                    date={movie.release_date}
                    rate={movie.vote_average}
                    movieId={movie.id}
                    watchList={moviesList}
                    removeFromWatchList={()=>{
                      const movieIndex =  moviesList.findIndex( m  => m.id === movie.id )
                      const newList = moviesList
                      newList.splice(movieIndex, 1)
                      console.log(newList)
                      setMoviesList(newList)
                      localStorage.setItem("watchList", JSON.stringify(newList))
                      console.log("existooo", newList)
                    }}
                />
            )})}
        </div>
      </div>
  );
};
WatchList.propTypes = {
  watchlist:arrayOf()
};
WatchList.defaultProps = {};
export default WatchList;
