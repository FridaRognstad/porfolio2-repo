import styles from "../../styles/modules/Nav.module.css";
import showExam from "../../hooks/showExam";
import showJS from "../../hooks/showJS";
import showSemester from "../../hooks/showSemester";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a onClick={showExam}>Project Exam</a>
          <span className={styles.line}></span>
        </li>
        <li>
          <a onClick={showSemester}>Semester Project</a>
        </li>
        <li>
          <a onClick={showJS}>Js Frameworks</a>
        </li>
      </ul>
    </nav>
  );
}
