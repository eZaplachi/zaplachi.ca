import styles from "../styles/Footer.module.css";

const Footer = (props: { text: string }) => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.footer}>{props.text}</h3>
    </div>
  );
};

export default Footer;
