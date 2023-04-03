import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { About, Header, Meta, Portfolio, PortfolioPopup} from "components";
import Layout from "components/Layout";
import details from "utils/data";
import { Provider } from 'react-redux';
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <Meta />
      <Layout>
        <Header />
        <About />
        <Portfolio />
      </Layout>
    </Provider>
  );
}
