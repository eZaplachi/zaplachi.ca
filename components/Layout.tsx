import { ReactChild } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/components/Layout.module.css";

const Layout = (props: { children: ReactChild; footerText: string }) => {
	return (
		<div>
			<div className='navbar'>
				<Navbar />
			</div>
			<main className={styles.wrapper}>
				<div className={styles.content}>{props.children}</div>
			</main>
			<footer>
				<Footer text={props.footerText} />
			</footer>
		</div>
	);
};

export default Layout;
