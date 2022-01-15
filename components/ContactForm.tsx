import {
  faLongArrowAltRight,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useRef, useState } from "react";
import styles from "../styles/components/ContactForm.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("nonSub");
  const [fail, setFail] = useState(String);
  const ref = useRef<HTMLInputElement>(null);

  // TODO: set character limits and responsive counter
  let emailLength = email.length;
  let subjectLength = subject.length;
  let messageLength = message.length;
  const emailLengthMax = 50;

  const formSub = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      email,
      subject,
      message
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted("sub");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        // Todo: better error messages
        setSubmitted("fail");
        switch (res.status) {
          case 500:
            setFail("server");
            break;
          case 404:
            setFail("client");
            break;
        }
      }
    });
  };

  if (ref && ref.current) {
    switch (submitted) {
      case "sub":
        document.getElementById(styles.successIcon)!.style.opacity = "1";
        document.getElementById(styles.failIcon)!.style.opacity = "0";
        document.getElementById(styles.resMessage)!.style.opacity = "1";
        document.documentElement.style.setProperty("--inputBorderClr", "green");
        break;
      case "fail":
        document.getElementById(styles.successIcon)!.style.opacity = "0";
        document.getElementById(styles.failIcon)!.style.opacity = "1";
        document.documentElement.style.setProperty("--inputBorderClr", "red");
        break;
      default:
        document.getElementById(styles.successIcon)!.style.opacity = "0";
        document.getElementById(styles.failIcon)!.style.opacity = "0";
        document.getElementById(styles.resMessage)!.style.opacity = "0";
        break;
    }
  }

  return (
    <section>
      <form onSubmit={formSub} className={styles.wrapper}>
        <label
          htmlFor={styles.emailIn}
          className={styles.inputLabel}
          id={styles.emailLabel}
        >
          Email:
        </label>
        <input
          className={styles.smallInput}
          type="text"
          name="emailIn"
          id={styles.emailIn}
          placeholder="example@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label
          htmlFor={styles.subjectIn}
          className={styles.inputLabel}
          id={styles.subjectLabel}
        >
          Subject:
        </label>
        <input
          className={styles.smallInput}
          type="text"
          name="subjectIn"
          id={styles.subjectIn}
          placeholder="Subject..."
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <label
          htmlFor={styles.messageIn}
          className={styles.inputLabel}
          id={styles.messageLabel}
        >
          Question:
        </label>
        <input
          className={styles.largeInput}
          type="text"
          name="contentIn"
          id={styles.messageIn}
          placeholder="Your Message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div ref={ref} className={styles.iconWrapper}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            id={styles.successIcon}
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faTimesCircle}
            id={styles.failIcon}
            className={styles.icon}
          />
          <p id={styles.resMessage}>Confirmation email sent!</p>
          <button className={styles.button} type="submit">
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
