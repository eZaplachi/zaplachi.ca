import Layout from "../components/Layout";
import styles from "../styles/pages/404.module.css";
// TODO Better error page
const NotFound = () => {
  return (
    <div>
      <Layout footerText="Error 404" stickyOffset={0}>
        <div className={styles.container}>
          <div id={styles.aside1}></div>
          <div className={styles.errorMsg}>
            <p className={styles.title}>Error: 404 - Page not found</p>
            <p className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              error numquam similique nihil ea doloremque at, ad nisi a sit eum
              deserunt nemo ipsum est earum laborum quas cupiditate ullam.
            </p>
          </div>
          <div id={styles.aside2}></div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
