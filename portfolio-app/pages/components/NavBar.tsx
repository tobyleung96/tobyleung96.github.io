import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.navbarContainer}>
        <Link href="/">
          <img
            className={styles.navbar}
            src="/homeButton.svg"
            alt="homeButton"
          ></img>
        </Link>
        <Link href="/contact">
          <img
            className={styles.navbar}
            src="/contactButton.svg"
            alt="contactButton"
          ></img>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
