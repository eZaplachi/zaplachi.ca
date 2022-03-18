import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import styles from "../styles/pages/404.module.css";
// TODO Better error page
const NotFound = () => {
  return (
    <div>
      <Layout
        footerText="Error 404"
        stickyOffset={20}
        header="Error"
        description="Error 404"
        keywords="error"
      >
        <div className={styles.wrapper}>
          <div id={styles.aside1}></div>
          <div className={styles.errorMsg}>
            <p className={styles.title}>Error: 404 - Page not found</p>
            <p className={styles.info}>
              Sorry, your page could not be found. If you think this page is
              missing, please contact Evan Zaplachinski through the contact page
              or email at:&nbsp;
              <u>evan@zaplachi.ca</u>
            </p>
            <Link href="/">
              <a className={styles.homeBtn}>
                <FaHome />
              </a>
            </Link>
          </div>
          <div id={styles.aside2}></div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
