import styles from "../../styles/modules/Home.module.css";
// Video by MART PRODUCTION from Pexels

export default function Video() {
  return (
    <video autoPlay muted loop className={styles.video}>
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}
