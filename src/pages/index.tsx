import Head from "next/head";

import homeStyles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jihoo Park</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Jihoo Park Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </>
  );
}
