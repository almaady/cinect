import React, {useState, useEffect} from "react";

import {number, string, func,arrayOf, shape} from "prop-types";
import styles from "./NavBar.module.css"



const NavBar = ({options}) => {
  return (
      <div className={styles.navBarContainer}>
        <a href="/watch-list">
          Watch List
        </a>
        <a href="/">
          Home
        </a>
      </div>
  );
};
NavBar.propTypes = {
  options: arrayOf(shape({}))
};
NavBar.defaultProps = {};
export default NavBar;
