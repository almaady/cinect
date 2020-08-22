import React, {useState, useEffect} from "react";
import {number, string, func} from "prop-types";
import Listing from "../../Components/Listing/Listing";
import NavBar from "../../Components/NavBar/NavBar";
import WatchList from "../../Components/WatchList/WatchList";



const WatchListContainer = ({currentUrl}) => {

  return (
      <>
        <NavBar/>
        <WatchList/>
      </>
  );
};
WatchListContainer.propTypes = {
  currentUrl: string.isRequired,
};

export default WatchListContainer;
