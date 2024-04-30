import About from "./About/About";
import Hero from "./Hero/Hero";
import Icons from "./svg/Icons";
import styles from "./App.module.css";
import Featured from "./featured/Featured";
import { useState } from "react";
function Homepage() {
  const [scrollPosition, setScrollPosition] = useState(true);
  return (
    <div className={styles.homepage}>
      <Hero />
      <About />
      <div className={styles.contact}>
        <div className={styles.facebookIconBox}>
          <Icons letter="facebook" color="#ffffff" />
        </div>
        <div className={styles.iconBox}>
          <Icons letter="phone" color="#ffffff" />
        </div>
      </div>
      <div className={`${scrollPosition ? "hidden" : styles.Up}`}>
        <div className={styles.UpIconBox}>
          <Icons letter="up" color="#ffffff" />
        </div>
      </div>
      <Featured />
    </div>
  );
}

export default Homepage;
