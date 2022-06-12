import styles from "../../styles/modules/Card.module.css";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import LinkProp from "../layout/Link";
import Image from "next/image";

export default function ProjectExam() {
  return (
    <div className={styles.examContainer} id="exam">
      <div className={styles.cardContainer}>
        <span className={styles.cardBackground}></span>
        <Heading size="2" title="Project Exam 2" />{" "}
        <a href="https://holidaze-frida-rognstad.netlify.app">Netlify link</a>
        <div className={styles.git}>
          <LinkProp url="https://github.com/Noroff-FEU-Assignments/project-exam-2-FridaRognstad.git" />
        </div>
        <Paragraph content="This was my app for the Project Exam 2. The app is made for a fictional tourist agency in Bergen called Holidaze using Next.js. The users can book different establishments in Bergen and contact the agency. The admin can also log in and ad establishments, see bookings and messages from the contact form on the admin dashboard. The project get and post its requests to a headless API that I built using Wordpress." />
        <Image
          src={`/project-exam-index.jpg`}
          alt="Semester Project 2 homepage"
          width={900}
          height={1547}
        />
      </div>
    </div>
  );
}
