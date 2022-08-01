import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { AiOutlinePlus, AiFillCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Rajah from "../../asset/rajah.jfif";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <GiHamburgerMenu className={styles.hamburger} />
      <a href="/">
        <BsGithub className={styles["github-icon"]} />
      </a>
      <input
        type="search"
        placeholder="Search or jump to..."
        className={styles.search}
      />
      <ul className={styles.links}>
        <li className={styles.showBigScreen}>
          <a href="/">Pull requests</a>
        </li>
        <li className={styles.showSmallScreen}>
          <a href="/">Pulls</a>
        </li>
        <li>
          <a href="/">Issues</a>
        </li>
        <li>
          <a href="/">Marketplace</a>
        </li>
        <li>
          <a href="/">Explore</a>
        </li>
      </ul>
      <div className={styles.aside}>
        <a href="/">
          <BiBell className={styles.bell} />
        </a>
        <div className={styles.plusBox}>
          <a href="/">
            <AiOutlinePlus className={styles.plus} />
          </a>
          <a href="/">
            <AiFillCaretDown className={styles.down} />
          </a>
        </div>
        <div className={styles.imageBox}>
          <a href="/">
            <img src={Rajah} alt="hello" className={styles.image} />
          </a>
          <a href="/">
            <AiFillCaretDown className={styles.down} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
