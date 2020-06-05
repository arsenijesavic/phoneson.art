import Head from "next/head";
import "../styles/index.css";

export default ({ Component, pageProps }) => {
  const title = `PHONES:ON – new music with smartphones`;
  const description = `PHONES:ON is an interactive concert of new music and sound installations that all allow or specifically require different ways of using smartphones in the performance. Thus, smartphones serve as a source of sound, display scores, send and receive instructions, conduct, play music, illuminate the performer’s faces, take photos, play videos and use various applications.`;
  return (
    <>
      <Head>
        <title>PHONES:ON</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📞</text></svg>"
        />

        {/* <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
        <link rel="stylesheet" href="" /> */}

        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
