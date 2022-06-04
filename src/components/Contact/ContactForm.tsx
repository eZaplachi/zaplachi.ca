import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
// import ContactModal from "./ContactModal";
import { contactLengths } from "../../lib/types";
import styles from "../../styles/components/ContactForm.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("nonSub");
  const [fail, setFail] = useState(String);
  const [loading, setLoading] = useState("Default");
  // const [modalOpen, setModalOpen] = useState(false);

  // TODO:  Make responsive counter have more conditions (eg. @) and prettier
  let currentLength: contactLengths = {
    email: email.length,
    subject: subject.length,
    message: message.length,
  };

  let maxLength: contactLengths = {
    email: 50,
    subject: 150,
    message: 800,
  };

  let minLength: contactLengths = {
    email: 5,
    subject: 10,
    message: 30,
  };

  const sendConditionsArray = [
    maxLength.email > currentLength.email &&
      currentLength.email > minLength.email,
    maxLength.subject > currentLength.subject &&
      currentLength.subject > minLength.subject,
    maxLength.message > currentLength.message &&
      currentLength.message > minLength.message,
  ];

  useEffect(() => {
    if (
      (0 < currentLength.email && currentLength.email < minLength.email) ||
      currentLength.email > maxLength.email
    ) {
      document.getElementById("emailLength")!.style.color =
        "var(--formDenyClr)";
      document.getElementById("emailLength")!.style.fontSize = "0.8em";
      document.getElementById("emailLength")!.style.fontWeight = "100";
    } else if (
      minLength.email < currentLength.email &&
      currentLength.email <= maxLength.email
    ) {
      document.getElementById("emailLength")!.style.color =
        "var(--formAcceptClr)";
      document.getElementById("emailLength")!.style.fontSize = "0.9em";
      document.getElementById("emailLength")!.style.fontWeight = "400";
    }

    if (
      (0 < currentLength.subject &&
        currentLength.subject < minLength.subject) ||
      currentLength.subject > maxLength.subject
    ) {
      document.getElementById("subjectLength")!.style.color =
        "var(--formDenyClr)";
      document.getElementById("subjectLength")!.style.fontSize = "0.8em";
      document.getElementById("subjectLength")!.style.fontWeight = "100";
    } else if (
      minLength.subject < currentLength.subject &&
      currentLength.subject <= maxLength.subject
    ) {
      document.getElementById("subjectLength")!.style.color =
        "var(--formAcceptClr)";
      document.getElementById("subjectLength")!.style.fontSize = "0.9em";
      document.getElementById("subjectLength")!.style.fontWeight = "400";
    }

    if (
      (0 < currentLength.message &&
        currentLength.message < minLength.message) ||
      currentLength.message > maxLength.message
    ) {
      document.getElementById("messageLength")!.style.color =
        "var(--formDenyClr)";
      document.getElementById("messageLength")!.style.fontSize = "0.8em";
      document.getElementById("messageLength")!.style.fontWeight = "100";
    } else if (
      minLength.message < currentLength.message &&
      currentLength.message <= maxLength.message
    ) {
      document.getElementById("messageLength")!.style.color =
        "var(--formAcceptClr)";
      document.getElementById("messageLength")!.style.fontSize = "0.9em";
      document.getElementById("messageLength")!.style.fontWeight = "400";
    }
  });

  let loadingHidden = {
    initialArrow: 1,
    height: "0rem",
    opacity: 0,
  };

  const loadingCon = {
    width: "2rem",
    height: `${loadingHidden.height}`,
    display: "flex",
    justifyContent: "space-around",
    opacity: `${loadingHidden.opacity}`,
  };

  const loadingCircle = {
    display: "block",
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "black",
    borderRadius: "0.25rem",
  };

  const loadingConVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const loadingCircleTrans = {
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut",
  };

  const arrowRef = useRef<HTMLInputElement>(null);
  const loadingRef = useRef<HTMLInputElement>(null);

  const formSub = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (arrowRef && arrowRef.current && loadingRef && loadingRef.current) {
      arrowRef.current.style.opacity = "0";
      loadingRef.current.style.opacity = "1";
      loadingRef.current.style.height = "2rem";
    }

    // setLoading("loading");

    // loadingHidden = {
    //   initialArrow: 0,
    //   height: "2rem",
    //   opacity: 1,
    // };

    let data = {
      email,
      subject,
      message,
    };

    if (!sendConditionsArray.includes(false)) {
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
    }
    // setModalOpen(true);
  };

  const successRef = useRef<HTMLInputElement>(null);
  const failRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (arrowRef && arrowRef.current && loadingRef && loadingRef.current) {
      if (loading === "loading") {
        arrowRef.current.style.opacity = "0";
        loadingRef.current.style.opacity = "1";
      }
      console.log(loading);
    }
  }, [loading]);

  return (
    <section>
      {/* {modalOpen && (
        <ContactModal onClose={() => setModalOpen(false)} res={submitted} />
      )} */}

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
          type="email"
          name="emailIn"
          id={styles.emailIn}
          placeholder="example@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          minLength={minLength.email}
          maxLength={maxLength.email}
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
          required
          minLength={minLength.subject}
          maxLength={maxLength.subject}
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
          required
          minLength={minLength.message}
          maxLength={maxLength.message}
        />
        <div className={styles.iconWrapper}>
          <button className={styles.button} type="submit">
            <motion.div ref={arrowRef}>
              <FaLongArrowAltRight />
            </motion.div>
            <motion.div
              style={loadingCon}
              variants={loadingConVariants}
              initial="start"
              animate="end"
            >
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTrans}
              />
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTrans}
              />
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTrans}
              />
            </motion.div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
