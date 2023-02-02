import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "@/lib/post";

// SSGの場合

export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi aperiam quo hic blanditiis error aliquam ipsa distinctio laboriosam, enim deleniti facilis. Qui
          excepturi eligendi pariatur dolores, eius nisi aspernatur.
        </p>
      </section>

      <section className={`${utilStyles.headingMd}${utilStyles.padding1px}`}>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <p className={utilStyles.boldText}>{title}</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
