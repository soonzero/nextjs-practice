import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          안녕하세요. 금세영입니다!
          <br />
          프론트엔드 개발자가 되기 위해 열심히 준비 중입니다!
        </p>
      </section>
    </Layout>
  );
}
