import Head from "next/head";

const name = "Hiroki Ono";
export const siteTitle = "Next.js blog";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/mens_icon.png" alt="" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
