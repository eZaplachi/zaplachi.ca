import styles from "../styles/components/Dropdown.module.css";

const Dropdown = (props: { title: string }) => {
  return (
    <div className={styles.main}>
      <h3>{props.title}</h3>
      <div className=""></div>
    </div>
  );
};
