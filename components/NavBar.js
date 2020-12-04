import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLogo}>Reddit Bot</div>
      <div className={styles.navItems}>
        <div className={styles.navItem}>About</div>
        <div className={styles.navItem}>Pricing</div>
        <div className={styles.navItem}>Contact Us</div>
      </div>
    </div>
  );
};

export default NavBar;
