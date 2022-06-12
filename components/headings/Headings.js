import styles from "../../styles/modules/Home.module.css";
import Heading from "../layout/Heading";

export default function Headings() {
  return (
    <div className={styles.headings} id="headings">
      <Heading title="Portfolio 2" />
      <Heading size="3" title="© Frida Rognstad" />
    </div>
  );
}
