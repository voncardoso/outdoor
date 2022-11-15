import Image from "next/image";
import Link from "next/link";
import IconFalseConosco from "../../../public/assets/faleconosco.svg";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="#" className={styles.link}>
          <Image
            className={styles.IconFaleConosco}
            src={IconFalseConosco}
            alt="Fale com nosco"
          />
          <p className={styles.text}>Fale Conosco</p>
        </Link>
      </nav>
    </header>
  );
}
