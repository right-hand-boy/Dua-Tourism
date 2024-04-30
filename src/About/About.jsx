import styles from "./About.module.css";
import img from "/image/dua-abt-img.jpg";
import useAnimation from "../Function/useAnimation";

function About() {
  // const about = useRef(null);
  // if (about.getBoundingClientRect().top < window.innerHeight - 50) {
  //   about.classList.add(animationType);
  //   window.removeEventListener("scroll", handleScroll);
  // }

  const h1 = useAnimation("move-right");
  const h2 = useAnimation("move-down");
  const p = useAnimation("move-up");
  const button = useAnimation("move-up-left");

  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutUsInformation}>
        <h2 ref={h2}>welcome to dub trusim</h2>
        <h1 ref={h1}>trusted and well reputed tourism campany</h1>
        <p className={styles.information} ref={p}>
          Welcome To Dua Tourism, Your Gateway To Unforgettable Travel
          Experiences. With A Passion For Showcasing The Beauty And Diversity Of
          The Arabian Peninsula, We Curate Exceptional Journeys That Explore The
          Enchanting Safari Desert, The Iconic Wonders Of Dubai, And The
          Cultural Treasures Of Abu Dhabi. Our Commitment To Excellence,
          Personalized Service, And A Deep Understanding Of Our Destinations
          Ensures That Every Traveler Embarks On A Seamless Blend Of Adventure,
          Luxury, And Authenticity, Discovering The Magic Of These Remarkable
          Locations Through The Eyes Of Dua Tourism
        </p>
        <button className={styles.learnMore} ref={button}>
          learn more &rarr;
        </button>
      </div>
      <div>
        <img src={img} alt="girl" className={styles.duaAbtImg} />
        <div className={styles.numberCustomers}>
          <p>1,100</p> <p>happy customers</p>
        </div>
      </div>
    </div>
  );
}

export default About;
