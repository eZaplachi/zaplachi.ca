import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import styles from "../styles/pages/Contact.module.css";

const Contact = () => {
	return (
		<div>
			<Layout footerText='another footer' stickyOffset={0}>
				<body className={styles.wrapper}>
					<div className={styles.container} />
					<div className={styles.inputCon} />
					<div className={styles.input}>
						<ContactForm />
					</div>
					<div className={styles.contactCon} />
					<div className={styles.contact}>
						<ContactInfo />
					</div>
				</body>
			</Layout>
		</div>
	);
};

export default Contact;
