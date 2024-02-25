import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxProvider } from "../components/Provider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Navigation />
      <Component {...pageProps} />;
      <Footer/>
    </ReduxProvider>
  );
}
