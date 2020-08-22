import React, {useState, useEffect} from "react";
import {number, string, func,arrayOf, shape} from "prop-types"
import Link from "next/link";
import  styles from "./NavBar.module.css"
import Cross from "./Assets/Cross";
import Menu from "./Assets/Menu";
import {classes} from "../../utils/format";

const NavBar = ({options}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      console.log("no debo djar el scrolll")
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
      <div className={styles.navBarContainer}>
        <div className={styles.mobileContainer}>
          <h3>Cinect</h3>
        <button className={styles.burgerContainer}
          onClick={()=>{
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ?
          <Cross/> :
              <Menu/>
          }
        </button>
        </div>
        <div className={classes(styles.linksContainer, isOpen && styles.linksOpen)}>
          <Link href="/">
            <a>Home</a>
          </Link>
        <Link href="/watch-list">
          <a>Watch List</a>
        </Link>

        </div>
      </div>
  );
};
NavBar.propTypes = {
  options: arrayOf(shape({}))
};
NavBar.defaultProps = {};
export default NavBar;
