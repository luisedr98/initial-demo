import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "../Navbar";
import Image from "next/image";
import styles from "./MainLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Navbar />
          <p>
            Editando&nbsp;
            <code className={styles.code}>{`pages/${title}.js`}</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        {children}
      </main>
    </>
  );
};
