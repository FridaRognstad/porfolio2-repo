import styles from "../../styles/modules/Card.module.css";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import LinkProp from "../layout/Link";
import Image from "next/image";

import PropTypes from "prop-types";

export default function SemesterProject() {
  return (
    <div className={styles.semesterContainer} id="semester">
      <div className={styles.cardContainer}>
        <span className={styles.cardBackground}></span>
        <Heading size="2" title="Semester Project 2" />{" "}
        <div className={styles.git}>
          <LinkProp url="https://github.com/FridaRognstad/semester-project-2.git" />
        </div>
        <Paragraph content="For the Semester Project 2, I made a website for Wears, a fictional company in Bergen that sell shoes. The project gets data from localhost because I used the Strapi provided by the school. It has an admin login page for admin to log in. Once logged in, the admin can post, delete, and change the different products. It has a add to cart functionality using functions that save data on local storage. The layout and design on the page are built up using Bootstrap." />
        <Image
          src={`/semester-project-index.jpg`}
          alt="Semester Project 2 homepage"
          width={900}
          height={756}
        />
      </div>
    </div>
  );
}
