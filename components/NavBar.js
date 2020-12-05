import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLogo}>
        <Link href="/">Reddit Bot</Link>
      </div>
      <div className={styles.navItems}>
        <div className={styles.navItem}>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
