import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import styles from "../styles/pages/Contact.module.css";

const Contact = () => {
	library.add(faEnvelopeOpenText, faGithub);

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
						<FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon} />
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
