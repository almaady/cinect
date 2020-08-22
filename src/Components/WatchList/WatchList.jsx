import React, {useState, useEffect} from "react";
import {arrayOf} from "prop-types";
import styles from "./WatchList.module.css"
import MovieCard from "../MovieCard/MovieCard";


const WatchList = ({}) => {
  const [moviesList, setMoviesList] = useState([]);
  const [test, setTest] = useState(0)
  const getPrevWatchList = async () =>{
    const  prevWatchList = await JSON.parse(localStorage.getItem("watchList")) || [];
    try{
      setMoviesList(prevWatchList)
    }catch(e){
      console.warn(e)
    }

  }

  useEffect(()=>{
      getPrevWatchList();
  }, []);


  return (
      <div className={styles.mainContainer}>
        <div className={styles.watchListContainer}>
          {moviesList.map((movie, index)=>{
            return(
                <MovieCard
                    id={index}
                    title={movie.title}
                    key={`${movie.id}-${index}x`}
                    imageURL={movie.poster_path}
                    genres={movie.genre_ids}
                    date={movie.release_date}
                    rate={movie.vote_average}
                    movieId={movie.id}
                    watchList={moviesList}
                    removeFromWatchList={()=>{
                      const movieIndex =  moviesList.findIndex( m  => m.id === movie.id )
                      const newList = moviesList;
                      newList.splice(movieIndex, 1);
                      setMoviesList(newList);
                      setTest(movieIndex);
                      localStorage.setItem("watchList", JSON.stringify(newList))
                      return newList

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
