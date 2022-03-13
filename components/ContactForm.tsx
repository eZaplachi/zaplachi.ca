import {
  FaLongArrowAltRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/components/ContactForm.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("nonSub");
  const [fail, setFail] = useState(String);
  const ref = useRef<HTMLInputElement>(null);

  // Response message default -- cant't set in Form Submit (If empty string {eg. ""} maybe defaults back to that before being rendered??)
  let resMessage: string = "Character Limit Error";

  // TODO:  Make responsive counter have more conditions (eg. @) and prettier
  let currentLength = {
    email: email.length,
    subject: subject.length,
    message: message.length,
  };

  let maxLength = {
    email: 50,
    subject: 150,
    message: 800,
  };

  let minLength = {
    email: 5,
    subject: 10,
    message: 30,
  };

  const conditionsArray = [
    maxLength.email > currentLength.email &&
      currentLength.email > minLength.email,
    maxLength.subject > currentLength.subject &&
      currentLength.subject > minLength.subject,
    maxLength.message > currentLength.message &&
      currentLength.message > minLength.message,
  ];

  // TODO: make labels return to def color after returning to 0 chars
  useEffect(() => {
    if (
      (0 < currentLength.email && currentLength.email < minLength.email) ||
      currentLength.email > maxLength.email
    ) {
      document.getElementById("emailLength")!.style.color = "red";
      document.getElementById("emailLength")!.style.fontSize = "0.7em"
    } else if (
      minLength.email < currentLength.email &&
      currentLength.email <= maxLength.email
    ) {
      document.getElementById("emailLength")!.style.color = "green";
      document.getElementById("emailLength")!.style.fontSize = "0.9em"
    } else if (
      (0 < currentLength.subject && currentLength.subject < minLength.subject) ||
      currentLength.subject > maxLength.subject
    ) {
      document.getElementById("subjectLength")!.style.color = "red";
      document.getElementById("subjectLength")!.style.fontSize = "0.7em"
    } else if (
      minLength.subject < currentLength.subject &&
      currentLength.subject <= maxLength.subject
    ) {
      document.getElementById("subjectLength")!.style.color = "green";
      document.getElementById("subjectLength")!.style.fontSize = "0.9em"
    } else if (
      (0 < currentLength.message && currentLength.message < minLength.message) ||
      currentLength.message > maxLength.message
    ) {
      document.getElementById("messageLength")!.style.color = "red";
      document.getElementById("messageLength")!.style.fontSize = "0.7em"
    } else if (
      minLength.message < currentLength.message &&
      currentLength.message <= maxLength.message
    ) {
      document.getElementById("messageLength")!.style.color = "green";
      document.getElementById("messageLength")!.style.fontSize = "0.9em"
    }});

  const formSub = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let data = {
      email,
      subject,
      message,
    };

    if (!conditionsArray.includes(false)) {
      console.log("Sending");

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
    } else {
      console.log("Character limit error");
      document.getElementById(styles.failIcon)!.style.opacity = "1";
      document.getElementById(styles.resMessage)!.style.opacity = "1";
      document.documentElement.style.setProperty("--inputBorderClr", "red");
    }
  };

  if (ref && ref.current) {
    switch (submitted) {
      case "sub":
        document.getElementById(styles.successIcon)!.style.opacity = "1";
        document.getElementById(styles.failIcon)!.style.opacity = "0";
        document.getElementById(styles.resMessage)!.style.opacity = "1";
        document.documentElement.style.setProperty("--inputBorderClr", "green");
        resMessage = "Confirmation Email Sent";
        break;
      case "fail":
        document.getElementById(styles.successIcon)!.style.opacity = "0";
        document.getElementById(styles.failIcon)!.style.opacity = "1";
        document.getElementById(styles.resMessage)!.style.opacity = "1";
        document.documentElement.style.setProperty("--inputBorderClr", "red");
        resMessage = "Server Error";
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
          Email:{" "}
          <span className={styles.lengthCounter} id="emailLength">
            {currentLength.email}/{maxLength.email}
          </span>
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
          Subject:{" "}
          <span className={styles.lengthCounter} id="subjectLength">
            {currentLength.subject}/{maxLength.subject}
          </span>
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
          Question:{" "}
          <span className={styles.lengthCounter} id="messageLength">
            {currentLength.message}/{maxLength.message}
          </span>
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
          <FaCheckCircle id={styles.successIcon} className={styles.icon} />
          <FaTimesCircle id={styles.failIcon} className={styles.icon} />
          <p id={styles.resMessage}>{resMessage}</p>
          <button className={styles.button} type="submit">
            <FaLongArrowAltRight />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
