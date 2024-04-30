import styles from "./Navigation.module.css";
import Icons from "../svg/Icons";
import { useReducer, useState } from "react";

function Navigation() {
  const [isHovered, setIsHovered] = useState(false);
  function scroler(scrol) {
    window.scrollTo({
      left: scrol.left + window.pageXOffset,
      top: scrol.top + window.pageYOffset - navHeight,
      behavior: "smooth",
    });
  }
  // scrolling when navigation item click
  // const [view, reducer] = useReducer("home");
  return (
    <>
      <ul className={`${styles.navigation} move-up`}>
        <li className={styles.navigationItem}>home</li>
        <li className={styles.navigationItem}>about</li>
        <li
          className={`${styles.navigationItem} ${styles.adventuer}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          adventuer
          <Icons letter="plus" color="#fff" size="15" />
        </li>
        <li className={styles.navigationItem}>booking</li>
        <li className={styles.navigationItem}>contact</li>
      </ul>
      <button className={`${styles.callNow} move-left`}>call now</button>
      <div
        style={{ display: isHovered ? "flex" : "none" }}
        className={styles.adventuerList}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <li className={styles.adventerListItem}>abu dhabi tour</li>
        <li className={styles.adventerListItem}>abu dhabi city with lunch</li>
        <li className={styles.adventerListItem}>abu dhabi private city tour</li>
        <li className={styles.adventerListItem}>dubai city tour</li>
        <li className={styles.adventerListItem}>eveninig desert safari</li>
        <li className={styles.adventerListItem}>hot air ballon - standard</li>
        <li className={styles.adventerListItem}>global village tour</li>
        <li className={styles.adventerListItem}>12 miniutes iconic tour</li>
        <li className={styles.adventerListItem}>miracle gardrden tour</li>
        <li className={styles.adventerListItem}>buggy ride on rent</li>
        <li className={styles.adventerListItem}>desert safari + quad bike</li>
        <li className={styles.adventerListItem}>dhow dinner cruise creek</li>
        <li className={styles.adventerListItem}>dhow dinner cruise marina</li>
        <li className={styles.adventerListItem}>ferrari world abu dhabi</li>
        <li className={styles.adventerListItem}>hatta mountain safari</li>
        <li className={styles.adventerListItem}>private yachut safari</li>
        <li className={styles.adventerListItem}>hummer desert safari</li>
        <li className={styles.adventerListItem}>khorfakkan tour</li>
      </div>
    </>
  );
}

export default Navigation;
