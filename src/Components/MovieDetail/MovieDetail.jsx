import React, {useState, useEffect} from "react";
import {number, string, func} from "prop-types";
import styles from "./MovieDetail.module.css"
import {classes} from "../../utils/format";
import copies from "../MovieCard/copies";
import Cross from "../NavBar/Assets/Cross";


const MovieDetail = ({movie}) => {
  const getPrevWatchList = async () =>{
    const  prevWatchList = await JSON.parse(localStorage.getItem("watchList")) || [];
    try{
      setWatchList(prevWatchList)
    }catch(e){
      console.warn(e)
    }

  };

  const [watchList, setWatchList]  = useState ([]);
  const [status,setStatus] =  useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    getPrevWatchList()
  }, [])

  const getStatus = ()=>{
    return watchList.some((m)=> m.id === movie.id)
  }

  useEffect(()=>{
    setStatus(getStatus())
  },[watchList])



  return (
      <div className={styles.mainContainer}>
        <span className={styles.status}>{movie.status}</span>
        <div className={classes(styles.posterImage)} style={{backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie.poster_path})` }} />

        <div className={classes(styles.contentContainer, isOpen && styles.contentOpen )}>
          {
            isOpen &&

               <button className={styles.closeButton} onClick={
                 ()=>{
                   setIsOpen(false)
                 }
               }>
                 <Cross/>
               </button>
          }
          <div className={styles.titleContainer}>
          <div className={styles.title}><h1>{movie.title}</h1>
          <span className={styles.rate}>
           ❤️
            <p>{movie.vote_average}</p>
             </span>
          </div>
            <p className={styles.tagLine}>{movie.tagline}</p>
          </div>
          <div className={styles.summary}>
          <p>{movie.overview} </p>
          </div>
          <div className={styles.moreInfoContainer}>
          <div className={styles.specs}>

            <p>{movie.runtime} min </p>
            &nbsp; | &nbsp;
            <p> {movie.release_date}</p>
          </div>
{   !isOpen &&         <button
              onClick={()=>
              {
                setIsOpen(true)
              }}
            >
              {copies.more_info}
            </button>}
          </div>
          <p  className={styles.genresTitle}>{copies.genres}</p>
          <div className={styles.genresContainer} id="genresContainer">
            {movie.genres.map(genre =>
                <span key={genre.id}>{genre.name}</span>
            )}</div>

          <div className={styles.production}>
            <p>{copies.production_companies}</p>
            <ul>
            {movie.production_companies.map(company =>
                <li>{company.name}</li>
            )
            }
            </ul>
          </div>

          {status ?
              <button
                  id="removeButton"
                  className={styles.removeButton}
                  onClick={() => {
                    const movieIndex =  watchList.findIndex( m  => m.id === movie.id )
                    const newList =watchList
                    newList.splice(movieIndex, 1)
                    setWatchList(newList)
                    localStorage.setItem("watchList", JSON.stringify(newList))
                    setStatus(getStatus(newList))
                  }}
              >
                {copies.remove}
              </button>:
                  <button
                      id="addButton"
                      className={styles.addButton}
                      onClick={()=>{
                        const newList = watchList.concat(movie);
                        setWatchList(newList);
                        localStorage.setItem("watchList", JSON.stringify(newList))
                        setStatus(getStatus(newList))

                      }}
                  >
                    { copies.add_watch_list}
                  </button>
          }
        </div>


      </div>
  );
};
MovieDetail.propTypes = {
  movie: string
};
MovieDetail.defaultProps = {};
export default MovieDetail;
