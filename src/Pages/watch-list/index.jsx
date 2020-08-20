import React, {useState, useEffect} from "react";
import {number, string, func} from "prop-types";
import Listing from "../../Components/Listing/Listing";



const WatchList = ({currentUrl}) => {

  return (
      <div>
        <Listing />
      </div>
  );
};
WatchList.propTypes = {
  currentUrl: string.isRequired,
};

export default WatchList;
