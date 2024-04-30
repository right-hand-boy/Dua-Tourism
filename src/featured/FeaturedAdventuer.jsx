import { useState } from "react";
import useAnimation from "../Function/useAnimation";
import styles from "./FeaturedAdventuer.module.css";
function FeaturedAdventuer({ adventuer }) {
  const { img, name, info, price } = adventuer;
  const adven = useAnimation("move-adentuer-down");
  const [hoverd, setHoverd] = useState(false);

  return (
    <div className={styles.FeaturedTrousim} ref={adven}>
      <img src={img} alt={`${name} image`} />
      <div className={styles.FeaturedTrousimInformation}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.info}>{info}</p>
        <p
          onMouseLeave={() => setHoverd(false)}
          onMouseEnter={() => setHoverd(true)}
          className={`${styles.price} ${hoverd ? "button-animation" : ""}`}
        >
          {price} &rarr;
        </p>
      </div>
    </div>
  );
}

export default FeaturedAdventuer;
