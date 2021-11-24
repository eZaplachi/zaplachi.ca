import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/components/ContactInfo.module.css";

const ContactInfo = () => {
	const copyRef = useRef<HTMLDivElement>(null);
	const [copy, setCopy] = useState("none");
	const links = {
		email: "evan@zaplachi.ca",
		github: "www.github.com/eZaplachi",
	};

	useEffect(() => {
		if (copyRef && copyRef.current) {
			switch (copy) {
				case "none":
					copyRef.current.style.maxHeight = "0px";
					break;
				case "email":
					copyRef.current.style.maxHeight = `${copyRef.current.scrollWidth}px`;
					copyRef.current.style.opacity = "1";
					navigator.clipboard.writeText(links.email);
					break;
				case "github":
					copyRef.current.style.maxHeight = `${copyRef.current.scrollWidth}px`;
					copyRef.current.style.opacity = "1";
					navigator.clipboard.writeText(links.github);
					break;
				default:
					copyRef.current.style.maxHeight = "0px";
					break;
			}
		}
	}, [copyRef, copy]);

	const copiedEmail = () => {
		setCopy("email");
	};

	const copiedGithub = () => {
		setCopy("github");
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.contact}>
				<p className={styles.memoText}>Wise words of wisdom</p>
			</div>
			<div className={styles.copyMsg} ref={copyRef}>
				<span>Copied {copy} link to clipboard</span>
			</div>
			<div className={styles.contact} onClick={copiedEmail}>
				<FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon} />
				<span className={styles.contactText} id={styles.mail}>
					{links.email}
				</span>
			</div>
			<div className={styles.contact} onClick={copiedGithub}>
				<FontAwesomeIcon icon={faGithub} className={styles.icon} />
				<span className={styles.contactText} id={styles.github}>
					{links.github}
				</span>
			</div>
		</div>
	);
};

export default ContactInfo;
