import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../src/components/Header/Header";
import styles from "../styles/Home.module.css";
import Logo from "../public/assets/outdor.svg";
import Logo02 from "../public/assets/logo02.png";
import Especialistas from "../public/assets/especialistas.png";
import EspecialistaMulher from "../public/assets/ImagemMulher.png";
import Celular01 from "../public/assets/Celular01.png";
import Celular02 from "../public/assets/celular02.png";
import Enfermeiros from "../public/assets/enfermeiro.png";
import Arquitetos from "../public/assets/arquiteto.png";
import Eletricistas from "../public/assets/eletricista.png";
import Engenheiro from "../public/assets/engenheiro.png";
import Marceneiro from "../public/assets/marceneiro.png";
import Macanico from "../public/assets/mecanico.png";
import Pedreiro from "../public/assets/pedreiro.png";
import Store from "../public/assets/AppStore.png";
import googlePlay from "../public/assets/GooglePlay.png";

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

        <Image
          className={styles.imgespecialistasMulher}
          src={EspecialistaMulher}
          alt="Especialistas"
        />
      </section>

      <section className={styles.conectandoServicos}>
        <div className={styles.conectando}>
          <h1 className={styles.tituloConectando}>
            Conectando de forma inteligente
          </h1>

          <div className={styles.containerConectando}>
            <div className={styles.infoConectando}>
              <Image className={styles.logo02} src={Logo02} alt="" />
              <p className={styles.ConectandoP}>Conecta você a profissionais</p>
              <h2 className={styles.ConectandoH2}>
                Somos uma plataforma que facilita a conexão entre clientes e
                profissionais de diversas atividades.
              </h2>
            </div>
            <Image className={styles.celular01} src={Celular01} alt="" />
          </div>
        </div>
      </section>

      <section className={styles.Servicos}>
        <div>
          <h1 className={styles.tituloServicos}>Alguns serviços</h1>
          <p className={styles.servicosP}>
            This section can be adapted for your website. You may choose to
            highlight other things like courses or programs, or to share special
            features about your business that you want to promote. Double click
            on the text box to edit the text and make it your own.
          </p>
          <p className={styles.servicosP}>
            {" "}
            This section can be adapted for your website. You may choose to
            highlight other things like courses or programs, or to share special
            features about your business that you want to promote. Double click
            on the text box to edit the text and make it your own.
          </p>
        </div>
        <div></div>
      </section>
      <ul className={styles.servicosImagemProficionais}>
        <li className={styles.servicosli}>
          <p className={styles.servicosImagens}>Enfermeiros</p>
          <Image className={styles.iamgemUl} src={Enfermeiros} alt="" />
        </li>
        <li>
          <p className={styles.servicosImagens}>Arquitetos</p>
          <Image src={Arquitetos} alt="" />
        </li>
        <li>
          <p className={styles.servicosImagens}>Eletricistas</p>
          <Image src={Eletricistas} alt="" />
        </li>
        <li>
          <p className={styles.servicosImagens}>Engenheiros</p>
          <Image src={Engenheiro} alt="" />
        </li>
        <li>
          <p className={styles.servicosImagens}>Marceneiros</p>
          <Image src={Marceneiro} alt="" />
        </li>
        <li>
          <p className={styles.servicosImagens}>Mecanicios</p>
          <Image src={Macanico} alt="" />
        </li>
        <li>
          <p className={styles.servicosImagens}>Pedreiros</p>
          <Image src={Pedreiro} alt="" />
        </li>
      </ul>

      <section className={styles.faixa}>
        <Image className={styles.celular02} src={Celular02} alt="" />
      </section>

      <section className={styles.baixarAplicativo}>
        <div className={styles.aplicativo}>
          <h1 className={styles.aplicativoH1}>
            Baixe o aplicativo para contratar os melhores profissionais de sua
            cidade !
          </h1>
          <h3 className={styles.aplicativoH3}>
            Praticidade e segurança na palma da sua mão. Com o Outdoor você tem
            acesso aos profissionais, recebe notificações e avisos para
            acompanhar a sua solicitação
          </h3>

          <ul className={styles.lojasApps}>
            <Link
              className={styles.imgeAppsLink}
              href="https://apps.apple.com/br/app/outdoor/id6443528725"
            >
              <Image className={styles.imgeApps} src={Store} alt="App Store" />
            </Link>
            <Link className={styles.imgeAppsGooglePlay} href="#">
              <Image
                className={styles.imgeAppsGooglePlay}
                src={googlePlay}
                alt="Google Play"
              />
            </Link>
          </ul>
        </div>
      </section>
    </section>
  );
}
