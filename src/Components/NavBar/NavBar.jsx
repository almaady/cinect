import React, {useState, useEffect} from "react";
import {number, string, func,arrayOf, shape} from "prop-types"
import Link from "next/link";
import  styles from "./NavBar.module.css"

const NavBar = ({options}) => {
  return (
      <div className={styles.navBarContainer}>
        <Link href="/watch-list">
          <a>Watch List</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
  );
};
NavBar.propTypes = {
  options: arrayOf(shape({}))
};
NavBar.defaultProps = {};
export default NavBar;
