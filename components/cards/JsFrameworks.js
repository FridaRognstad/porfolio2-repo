import styles from "../../styles/modules/Card.module.css";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import LinkProp from "../layout/Link";
import Image from "next/image";

export default function JsFrameworks() {
  return (
    <div className={styles.jsContainer} id="js">
      <div className={styles.cardContainer}>
        <span className={styles.cardBackground}></span>
        <Heading size="2" title="JavaScript Framworks Course Assignment" />
        <div className={styles.git}>
          <LinkProp url="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-FridaRognstad.git" />
        </div>
        <Paragraph content="This is a simple app made for the JavaScript Frameworks course assignment. The goal was to use what we had learned throughout the course and built an app using Next.js or React. The app is built using Next.js and using Axios to get data from a API called Fruityvice. It has a details page for the fruit you click on. It also contains a login form built using React Hook Form and Yup that log in on local hosted API." />
        <Image
          src={`/js-frameworks-index.jpg`}
          alt="Semester Project 2 homepage"
          width={900}
          height={765}
        />
      </div>
    </div>
  );
}
