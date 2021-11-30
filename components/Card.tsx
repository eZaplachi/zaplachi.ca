import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Card.module.css";
import defaultBkg from "../public/heroBG.jpg";

const Card = (props: { title: string; content: string; cardLink: string }) => {
  let link = `/projects/${props.cardLink}`;

  return (
    <section>
      <div className={styles.card}>
        <Image src={defaultBkg} layout="fill" alt="bkgimg" objectFit="cover" />
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
    </section>
  );
};

export default Card;
