import React from "react";
import Head from "next/head";
import "../styles/index.css";

import { AnimatePresence, motion } from "framer-motion";

export default ({ Component, pageProps, router }) => {
  const title = `PHONES:ON – new music with smartphones`;
  const description = `PHONES:ON is an interactive concert of new music and sound installations that all allow or specifically require different ways of using smartphones in the performance. Thus, smartphones serve as a source of sound, display scores, send and receive instructions, conduct, play music, illuminate the performer’s faces, take photos, play videos and use various applications.`;

  const animations = {
    exit: { opacity: 0 },
    inital: { opacity: 0 },
    animate: { opacity: 1 },
  };

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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="" />

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule=""
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
        />
      </Head>

      <AnimatePresence exitBeforeEnter={true}>
        <motion.div key={router.route} {...animations}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};
