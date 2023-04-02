import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { About, Header, Meta, Portfolio, PortfolioPopup} from "components";
import Layout from "components/Layout";
import details from "utils/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <Header />
        <About />
        <Portfolio />
      </Layout>
    </>
  );
}
