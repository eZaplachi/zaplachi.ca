import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <main>
      <Layout footerText='another footer'>
        <body className={styles.wrapper}>
          <div id={styles.aside1}></div>
          <div className={styles.container} />
          <div className={styles.inputCon} />
          <div className={styles.contactCon} />
          <div className={styles.contact} id={styles.memo}>
            <p className={styles.contactText}>Wise words of wisdom</p>
          </div>
          <div className={styles.contact} id={styles.mail}>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className={styles.icon}
            />
            <span className={styles.contactText}>Email@email.com</span>
          </div>
          <div className={styles.contact} id={styles.github}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span className={styles.contactText}>github.com/eZaplachi</span>
          </div>
          <div className={styles.input}>
            <ContactForm />
          </div>
        </body>
      </Layout>
    </main>
  );
};

export default Contact;
