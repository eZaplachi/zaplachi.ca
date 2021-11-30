import styles from "../styles/components/Footer.module.css";

const Footer = (props: { text: string }) => {
  return (
    <section>
      <div className={styles.footer}>
        <h3 className={styles.footer}>{props.text}</h3>
      </div>
    </section>
  );
};

export default Footer;
