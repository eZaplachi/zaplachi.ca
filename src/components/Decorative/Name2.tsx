import { motion } from "framer-motion";
import styles from "../../styles/components/Name2.module.css";

const Name2 = () => {
 return (
    <section>
      <motion.div
        className={styles.char}
        id={styles.c1}
        initial={{ x: 0, y: 0 }}
        animate={{ x: [100, 200, 300], y: [100, 50, 200] }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      >
        E
      </motion.div>
    </section>
  );
};

export default Name2;
