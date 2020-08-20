import React, {useState, useEffect} from "react";
import {number, string, func} from "prop-types";
import Listing from "../Components/Listing/Listing";
import NavBar from "../Components/NavBar/NavBar";



const IndexPage = ({currentUrl}) => {

  return (
      <div>
        <NavBar/>
        <Listing home/>
      </div>
  );
};
IndexPage.propTypes = {
  currentUrl: string.isRequired,
};

export default IndexPage;
