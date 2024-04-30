import useAnimation from "../Function/useAnimation";
import styles from "./Featured.module.css";
import tours from "../../Data/Adventuer.json";
import FeaturedAdventuer from "./FeaturedAdventuer";
function Featured() {
  const h1 = useAnimation("move-up");
  const h2 = useAnimation("move-up");
  const Tours = tours.Adventuers;
  return (
    <div className={styles.FeaturedAdventuer}>
      <h2 ref={h2}>featured adventuer</h2>
      <h1 ref={h1}>most popular attraction</h1>
      <div className={styles.FeaturedInformation}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe unde,
          modi nam reprehenderit magnam numquam officia praesentium suscipit,
          nobis provident facere, quis eveniet consequatur qui obcaecati ab. Et,
          inventore provident.
        </p>
        <button>view message</button>
      </div>
      <div className={styles.FeaturedAdventuerBox}>
        {Tours.map((tour) => {
          return <FeaturedAdventuer adventuer={tour} key={tour.name} />;
        })}
      </div>
    </div>
  );
}

export default Featured;
