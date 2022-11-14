import Head from "next/head";
import Image from "next/image";
import { Header } from "../src/components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Outdoor</title>
        <meta name="description" content="Outdoor" />
      </Head>

      <Header />
    </div>
  );
}
