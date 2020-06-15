import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/index.css";

const Layout = ({ children }) => {
  const [isSplashVisible, setSplashVisible] = useState(false);
  const router = useRouter();

  const activeRoute = router?.pathname;

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 2000);
  }, [setSplashVisible]);

  return (
    <div className="w-full">
      {isSplashVisible && (
        <div className="w-full h-full bg-black text-white absolute top-0 left-0 right-0 z-50">
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">PHONES:ON</h1>
            <p className="text-base leading-none">
              web app for interactive performance
            </p>
            <p className="text-base leading-none">
              of contemporary music with devices
            </p>
          </div>
        </div>
      )}

      {/* <header className="sm:hidden w-full h-16 bg-red-700 text-center fixed top-0 left-0 z-30">
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-base font-bold text-white">Perform</p>
        </div>
      </header> */}

      <div className="min-h-screen">{children}</div>

      <footer className="sm:hidden w-full  bg-gray-900 text-center fixed bottom-0 left-0 z-30 pt-2">
        <ul className="w-full h-full flex justify-center items-center">
          {[
            {
              name: "Perform",
              pathname: "/",
              icon: ({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <g fill="none" className="stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 01416 154v22"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0123-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 00-12.6-9.61L204 102a16.48 16.48 0 00-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80"
                    />
                  </g>
                </svg>
              ),
            },
            {
              name: "Composers",
              pathname: "/composers",
              icon: ({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <g fill="none" className="stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                    />
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                    />
                  </g>
                </svg>
              ),
            },
            {
              name: "About",
              pathname: "/about",
              icon: ({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <g fill="none" className="stroke-current">
                    <path
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M256 56v120a32 32 0 0032 32h120"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M176 288L336 288"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M176 368L336 368"
                    />
                  </g>
                </svg>
              ),
            },
          ].map((item, index) => (
            <li className="flex-1 flex justify-center items-center" key={index}>
              <Link href={item.pathname}>
                <a>
                  <div
                    className={`flex flex-col justify-center items-center ${
                      item.pathname === activeRoute
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  >
                    <item.icon isActive={item.pathname === activeRoute} />
                    <p className="text-xs ">{item.name}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};
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

        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
