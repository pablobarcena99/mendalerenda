import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "../styles/Footer.css";
import "../styles/Navbar.css";
import localFont from "@next/font/local";
import { Roboto } from "@next/font/google";

const myFont = localFont({ src: "../fonts/DxSitrus.woff", variable: "--font-dxsitrus" });

const roboto = Roboto({variable: '--font-roboto', subsets: ['latin'], weight: '300'})


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${myFont.variable} ${roboto.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
