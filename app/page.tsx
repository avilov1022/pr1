import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
          <Header/>
          <Main/>
    </main>
  );
}
