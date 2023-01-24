import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私はフロントエンドエンジニアです。好きな言語はJavascriptです。</p>
      </section>

      <section className={`${utilStyles.headingMd}${utilStyles.padding1px}`}>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>あああああああああああああああああ</p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023/01/24</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>あああああああああああああああああ</p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023/01/24</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>あああああああああああああああああ</p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023/01/24</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>あああああああああああああああああ</p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>2023/01/24</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
