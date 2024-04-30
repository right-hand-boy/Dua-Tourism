import React from "react";
// import styles from "./animation.module.css";
import useAnimation from "../Function/useAnimation";

const AnimatedComponent = () => {
  const ben = useAnimation("move-down");

  return (
    <div ref={ben}>
      <h1>Animated component</h1>
    </div>
  );
};

export default AnimatedComponent;
