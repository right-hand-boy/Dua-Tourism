import useAnimation from "../Function/useAnimation";
import Icons from "../svg/Icons";
import styles from "./MyComponent.module.css";
function MyComponent() {
  const guides = useAnimation("move-down");
  const agency = useAnimation("move-down");
  const experience = useAnimation("move-down");
  const travlers = useAnimation("move-down");

  return (
    <ul className={styles.class}>
      <li>
        <Icons letter="users" color="#ffaf07" size="50" />
        <p ref={guides}>18+ local guides</p>
      </li>
      <li>
        <Icons letter="awards" color="#ffaf07" size="50" />
        <p ref={agency}>trusted agency</p>
      </li>
      <li>
        <Icons letter="map" color="#ffaf07" size="50" />
        <p ref={experience}>12+ years experience</p>
      </li>
      <li>
        <Icons letter="hand-holding-heart" color="#ffaf07" size="50" />
        <p ref={travlers}>99% happy travelers</p>
      </li>
    </ul>
  );
}

export default MyComponent;
