import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globat";
import { ToastContainer } from "react-toastify";
import "./index.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
