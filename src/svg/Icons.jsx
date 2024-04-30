import icons from "./icons.svg";
function Icons({ letter, color, size }) {
  return (
    <svg className={`svg-${letter}`} fill={color} width={size} height={size}>
      <use href={`${icons}#icon-${letter}`} />
    </svg>
  );
}
Icons.defaultProps = {
  size: "30px",
  color: "black",
};

export default Icons;
