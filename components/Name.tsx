import styles from '../styles/components/Name.module.css';

const Name = () => {
    return(
        <div className={styles.nameCon}>
            <h2>
                <span className={styles.nameFirstCon}>I &nbsp;</span>
                <span className={styles.nameScndCon}>A</span>
                <span className={styles.nameThirdCon}>m</span>
            </h2>
            <br />
            <h2>
                <span className={styles.nameFourthCon}>E</span>
                <span className={styles.nameFifthCon}>v</span>
                <span className={styles.nameFirstCon}>a</span>
                <span className={styles.nameScndCon}>n &nbsp;</span>
                <span className={styles.nameThirdCon}>Z</span>
                <span className={styles.nameFourthCon}>a</span>
                <span className={styles.nameFifthCon}>p</span>
                <span className={styles.nameFirstCon}>l</span>
                <span className={styles.nameScndCon}>a</span>
                <span className={styles.nameThirdCon}>c</span>
                <span className={styles.nameFourthCon}>h</span>
                <span className={styles.nameFifthCon}>i</span> 
                <span className={styles.nameFirstCon}>n</span>
                <span className={styles.nameScndCon}>s</span> 
                <span className={styles.nameThirdCon}>k</span>
                <span className={styles.nameFourthCon}>i</span>
            </h2>
        </div>
    )
}

export default Name;