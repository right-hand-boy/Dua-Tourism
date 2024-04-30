import { useEffect, useRef } from "react";
const useAnimation = (animationType) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container.getBoundingClientRect().top + 80 < window.innerHeight) {
        container.classList.add(animationType);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return containerRef;
};

export default useAnimation;
// import { useEffect } from "react";

// const useAnimation = (animationType, refs) => {
// useEffect(() => {
// const handleScroll = () => {
// refs.forEach((ref) => {
// if (ref.current && ref.current.getBoundingClientRect().top < window.innerHeight) {
// ref.current.classList.add(animationType);
// }
// });
// window.removeEventListener("scroll", handleScroll);
// };

// window.addEventListener("scroll", handleScroll);

// return () => {
// window.removeEventListener("scroll", handleScroll);
// };
// }, [refs, animationType]);
// };

// export default useAnimation;
