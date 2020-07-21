import React from "react";
import Link from "next/link";
import { get } from "lib/api";

import Layout from "components/Layout";
import Embed from "components/Embed";
import Img from "components/Img";

const About = ({ headline, subheadline, body }) => {
  return (
    <>
      <header className="py-8">
        <h1 className="text-5xl sm:text-6xl font-bold leading-none">
          {headline}
        </h1>
        <p className="text-base sm:text-xl leading-none mt-2 text-gray-400">
          {subheadline}
        </p>
      </header>

      <div
        className="text-base sm:text-xl leading-relaxed mt-10"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <div className="my-16 flex justify-center">
        <a
          href="https://zabuna.org/"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="w-64" src="/logo.png" alt="" />
        </a>
      </div>

      <Embed
        className="my-16"
        src="https://www.youtube.com/embed/kMJq6rnFNm4"
      />
    </>
  );
};

const Concerts = () => {
  return (
    <div className="mt-24 pb-12">
      <h2 className="text-3xl font-bold">Concerts</h2>

      <div className="mt-6">
        <h3 className="text-2xl text-gray-100 leading-none mt-6">
          1. PHONES:ON - new music with smartphones
        </h3>
        <p className="text-base text-gray-400 leading-none mt-2 capitalize italic">
          27 June 2019, @Belgrade Philharmonic Orchestra Hall, Belgrade
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl text-gray-100 leading-none mt-6 ">
          2. PHONES:ON - new music with smartphones at the International Review
          of Composers
        </h3>
        <p className="text-base text-gray-400 leading-none mt-2 capitalize italic">
          5 October 2019, @Student Cultural Center, Belgrade
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl text-gray-100 leading-none mt-6 ">
          3. 2K+ PHONES:ON - new music with smartphones
        </h3>
        <p className="text-base text-gray-400 leading-none mt-2 capitalize italic">
          16 December 2019, @Serbian National Theatre, Novi Sad
        </p>

        {/* <Embed
          className="mt-6"
          src="https://www.youtube.com/embed/UnpQLT-PBPQ"
        /> */}
      </div>
    </div>
  );
};

const Performer = ({ photo, instrument, name }) => {
  return (
    <div className="group bg-black hover:bg-black">
      <Img aspectRatio={1} src={photo} alt={name} />

      <hgroup className="mt-1">
        <p className="text-base text-gray-400 leading-none mt-2 capitalize group-hover:text-indigo-700">
          {instrument}
        </p>
        <h3 className="text-xl text-gray-100 leading-none mt-2 group-hover:text-indigo-400">
          {name}
        </h3>
      </hgroup>
    </div>
  );
};

const Performers = ({ data }) => {
  return (
    <div className="mt-24 pb-12">
      <h2 className="text-3xl font-bold">Performers</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
        {data.map((composer, index) => (
          <li key={index} className="mt-4">
            <Link href={composer.slug}>
              <a>
                <Performer {...composer} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SupportedBy = () => {
  return (
    <div className="mt-24 pb-12">
      <h1 className="text-3xl font-bold">Supported by</h1>
      <div>
        <div className="py-8 sm:py-16 flex justify-center bg-white">
          <a
            href="https://www.vipmobile.rs/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="w-64" src="/vip-logo@2x.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ({ about, performers }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-8 sm:px-16 text-gray-100 pb-48">
        <About {...about} />
        <Concerts />
        <Performers data={performers} />
        <SupportedBy />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const about = await get(`*[_type == 'about'][0]`);
  const performers = await get(`*[_type == 'performers']|order(name asc)`);
  return { props: { about, performers } };
}
