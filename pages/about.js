
import NavBar from "../components/NavBar";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <img
          src="https://i.gifer.com/Vr6.gif"
          alt="bg"
          className={styles.bgImg}
        />
      </div>
    </div>
  );
}
