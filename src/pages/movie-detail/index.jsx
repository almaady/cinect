import React, {useState, useEffect} from "react";
import MovieDetail from "../../Components/MovieDetail/MovieDetail";
import NavBar from "../../Components/NavBar/NavBar";
import movieApiInstance from "../../utils/movieAPIInstance";
import {MOVIE_DETAIL} from "../../utils/constants";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const {
  MOVIE_API_KEY,
} = publicRuntimeConfig;


const index = (props) => {
  return (
      <>
        <NavBar/>
        <MovieDetail
            movie={props.res}

        />
      </>
  );
};
index.getInitialProps = async (ctx) => {
  try {
    const id = ctx.query
    const response = await movieApiInstance().get(MOVIE_DETAIL(id.k,  MOVIE_API_KEY));
    return {res: response.data};

  }catch (e) {
    console.warn(e)
  }

}
export default index;
