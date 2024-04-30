import styles from "./Hero.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MyComponent from "./MyComponent";
import useAnimation from "../Function/useAnimation";

function Hero() {
  const h1 = useAnimation("move-down");
  const h2 = useAnimation("move-up");
  const p = useAnimation("pop-up");
  const button = useAnimation("pop-up");
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.header}>
        <Logo />
        <Navigation />
      </div>
      <h1 ref={h1}>exploer</h1>
      <h2 ref={h2}>the world</h2>
      <p ref={p}>
        With A Deep Passion For The Stunning Landscapes And Vibrant Culture Of
        The Arabian Peninsula, We Specialize In Curating Seamless And Authentic
        Journeys.
      </p>
      <button className={styles.buyNow} ref={button}>
        buy know
      </button>
      <MyComponent />
    </div>
  );
}

export default Hero;
