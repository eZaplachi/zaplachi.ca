import "../styles/globals.css";
import type { AppProps } from "next/app";

// TODO: fix docker production build

// TODO: add workflow to run sloc and append stats to readme

// TODO: add titles to all buttons for accessability
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
