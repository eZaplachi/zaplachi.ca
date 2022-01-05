import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import styles from "../styles/pages/Contact.module.css";

const Contact = () => {
	return (
			<Layout footerText='another footer' stickyOffset={0} header="Contact Page">
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
