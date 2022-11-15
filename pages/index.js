import Head from "next/head";
import Image from "next/image";
import { Header } from "../src/components/Header/Header";
import styles from "../styles/Home.module.css";
import Logo from "../public/assets/outdor.svg";
import Especialistas from "../public/assets/especialistas.png";

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Outdoor</title>
        <meta name="description" content="Outdoor" />
      </Head>
      <Header />
      <section className={styles.info}>
        <Image className={styles.logo} src={Logo} alt="Logo" />
        <h1 className={styles.titulo}>
          Quer reformar ou precisa de um serviço ?
        </h1>
        <h2 className={styles.subTitulo}>
          Calma, com o Outdoor você encontra diversos serviços e os melhores
          profissionais sempre !
        </h2>
        <Image
          className={styles.imgespecialistas}
          src={Especialistas}
          alt="Especialistas"
        />
      </section>
    </section>
  );
}
