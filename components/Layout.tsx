import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactChild } from "react";

const Layout = (props: { children: ReactChild; footerText: string }) => {
  return (
    <div>
      <div className='navbar'>
        <Navbar />
      </div>
      <main>{props.children}</main>
      <footer>
        <Footer text={props.footerText} />
      </footer>
    </div>
  );
};

export default Layout;
