import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Card.module.css";
import defaultBkg from "../public/heroBG.jpg";

const Card = (props: {
  title: string;
  content: string;
  cardLink: string;
  bkgImgUrl?: string;
  bkgImgTitle?: string;
}) => {
  let link = `/projects/${props.cardLink}`;
  let bkgImg = props.bkgImgUrl ? props.bkgImgUrl : defaultBkg;
  let imgTitle = props.bkgImgTitle ? props.bkgImgTitle : "bkgImg";

  return (
    <section>
      <div className={styles.card}>
        <Image src={bkgImg} layout="fill" alt={imgTitle} objectFit="cover" />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{props.title}</h2>
          <p className={styles.cardBody}>{props.content}</p>
          <Link href={link}>
            <a className={styles.button}>
              <FaArrowAltCircleRight />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
