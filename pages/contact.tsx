import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import styles from "../styles/pages/Contact.module.css";

const Contact = () => {
  return (
    <Layout
      footerText="Let me know your thoughts!"
      stickyOffset={20}
      header="Contact Page"
      description="Email me or find my links!!"
      keywords="Contact Email"
    >
      <div className={styles.wrapper}>
        <div className={styles.container} />
        <div className={styles.inputCon} />
        <div className={styles.input}>
          <ContactForm />
        </div>
        <div className={styles.contactCon} />
        <div className={styles.contact}>
          <ContactInfo />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
