import { FaGithub, FaEnvelopeOpenText } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { contactLinks } from "../../lib/types";
import styles from "../../styles/components/ContactInfo.module.css";

const links: contactLinks = {
  email: "evan@zaplachi.ca",
  github: "www.github.com/eZaplachi",
};

const ContactInfo = () => {
  const copyRef = useRef<HTMLDivElement>(null);
  const [copy, setCopy] = useState("none");

  useEffect(() => {
    const links: contactLinks = {
      email: "evan@zaplachi.ca",
      github: "www.github.com/eZaplachi",
    };

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
    <section>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <p className={styles.memoText}>Click below to copy the nametag!</p>
        </div>
        <div className={styles.copyMsg} ref={copyRef}>
          <span>Copied {copy} link to clipboard</span>
        </div>
        <div className={styles.contact} onClick={copiedEmail}>
          <FaEnvelopeOpenText className={styles.icon} />
          <span className={styles.contactText} id={styles.mail}>
            {links.email}
          </span>
        </div>
        <div className={styles.contact} onClick={copiedGithub}>
          <FaGithub className={styles.icon} />
          <span className={styles.contactText} id={styles.github}>
            {links.github}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
