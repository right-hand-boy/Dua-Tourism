import styles from "./Logo.module.css";
function Logo() {
  return (
    <>
      <img
        src="../../image/ficon-150x150.png"
        className={`${styles.logo} move-right`}
      />
      {/* <p>LOGO</p> */}
    </>
  );
}

export default Logo;
