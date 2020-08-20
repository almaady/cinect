import React, {useState, useEffect} from "react";
import {number, string, func, arrayOf, bool} from "prop-types";
import styles from "./MovieCard.module.css"
import copies from "./copies";
import {genresIDs} from "../../utils/constants";
import Star from  "./Assets/Star"


const MovieCard = (
    {
      movieId,
       image,
       title,
       date,
       genres,
       rate,
       home,
       addToWatchList,
       watchList,
       removeFromWatchList}

       ) => {

  const [status,setStatus] =  useState(false);


  useEffect(()=>{
    setStatus(getStatus())
    console.log(getStatus(), movieId, "soy el estadoooo")
  },[watchList])

  const getGenres = () =>{
    return genresIDs.filter(genre =>
       genres.indexOf(genre.id) !== -1
    )
  };

  const getStatus = ()=>{
    return watchList.some((m)=> m.id === movieId)
  }

  const getYear = () =>{
    const dateSplitted = date.split("-");
    return dateSplitted[0];
  }


  return (
      <div className={styles.mainContainer}>
       <div
           className={styles.poster}
           style={{ backgroundImage: `url(http://image.tmdb.org/t/p/original/${image})` }}
       >
         <div className={styles.rateContainer}>
           <div>
           <Star/>
           <p>{rate}</p>
           </div>
         </div>
       </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <div className={styles.yearContainer}>

            <p>{getYear()}</p>
            <div className={styles.buttonContainer}>
              {!home ?
                  <button
                      className={styles.removeButton}
                      onClick={() => {
                        removeFromWatchList()
                      }}
                  >
                    {copies.remove}
                  </button>:
                     status ?
                        <p>{copies.in_watch_list }</p>:
                        <button
                            className={styles.addButton}
                            onClick={()=>{
                              addToWatchList()
                            }}
                        >
                          { copies.add_watch_list}
                        </button>
                  }


            </div>
          </div>
            <div className={styles.genresContainer}>
              {getGenres().map(genre =>
                <span>{genre.name} </span>
            )}</div>

        </div>
      </div>
  );
};
MovieCard.propTypes = {
  image: string,
  title: string,
  year: number,
  genres: arrayOf(string),
  rate: number,
  status: bool,
  addToWatchList: func
};
MovieCard.defaultProps = {};
export default MovieCard;
