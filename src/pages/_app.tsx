import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// TODO: fix docker production build

// TODO: add workflow to run sloc and append stats to readme

// TODO: add titles to all buttons for accessability
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}

export default MyApp;
