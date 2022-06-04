import { CgCloseO } from "react-icons/cg";
import { HiCheck, HiX } from "react-icons/hi";
import { useRef } from "react";
import useLockBodyScroll from "./useLockBodyScroll";
import styles from "../../styles/components/ContactModal.module.css";

const ContactModal = (props: { onClose: () => void; res: string }) => {
  // useLockBodyScroll();

  const ref = useRef<HTMLInputElement>(null);
  let resMessage: string = "";

  if (ref && ref.current) {
    switch (props.res) {
      case "sub":
        document.getElementById(styles.successIcon)!.style.opacity = "1";
        document.getElementById(styles.failIcon)!.style.opacity = "0";
        document.documentElement.style.setProperty("--inputBorderClr", "green");
        resMessage = "Confirmation Email Sent";
        break;
      case "fail":
        document.getElementById(styles.successIcon)!.style.opacity = "0";
        document.getElementById(styles.failIcon)!.style.opacity = "1";
        document.documentElement.style.setProperty("--inputBorderClr", "red");
        resMessage = "Server Error";
        break;
      default:
        document.getElementById(styles.successIcon)!.style.opacity = "0";
        document.getElementById(styles.failIcon)!.style.opacity = "0";
        break;
    }
  }

  return (
    <section>
      <div className={styles.wrapper}>
        <button className={styles.closeBtn} onClick={props.onClose}>
          <CgCloseO />
        </button>
        <div className={styles.resCon} ref={ref}>
          <HiX id={styles.successIcon} />
          <HiCheck id={styles.failIcon} />
          <p id={styles.resMessage}>{resMessage}</p>
          <p>Test</p>
        </div>
      </div>
    </section>
  );
};

export default ContactModal;
