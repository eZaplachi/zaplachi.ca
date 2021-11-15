import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../styles/Card.module.css";

const Card = (props: { title: string; content: string; cardLink: string }) => {
  let link = `/projects/${props.cardLink}`;

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardBody}>{props.content}</p>
        <Link href={link}>
          <a className={styles.button}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
