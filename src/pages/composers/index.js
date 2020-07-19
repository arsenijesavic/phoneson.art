import React from "react";
import Link from "next/link";
import { get } from "lib/api";

import Layout from "components/Layout";
import Img from "components/Img";

const Header = () => {
  return (
    <header className="py-8">
      <h1 className="text-5xl sm:text-6xl font-bold leading-none">Composers</h1>
      <p className="text-base sm:text-xl leading-none mt-2 text-gray-400">
        List of composers
      </p>
    </header>
  );
};

const Composer = ({ photo, country, name }) => {
  return (
    <div className="group bg-black hover:bg-black">
      <Img
        style={{ filter: "grayscale(100%)" }}
        aspectRatio={1 / 1}
        src={photo}
        alt={name}
      />

      <hgroup className="mt-1">
        <p className="text-base text-gray-400 leading-none mt-2 capitalize group-hover:text-indigo-700">
          {country}
        </p>
        <h3 className="text-xl text-gray-100 leading-none mt-2 group-hover:text-indigo-400">
          {name}
        </h3>
      </hgroup>
    </div>
  );
};

const Composers = ({ data }) => {
  return (
    <div className="mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
        {data.map((composer, index) => (
          <li key={index} className="mt-4">
            <Link href={composer.slug}>
              <a>
                <Composer {...composer} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ({ composers }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-8 sm:px-16 text-gray-100 pb-48">
        <Header />
        <Composers data={composers} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const composers = await get(`*[_type == 'composers']|order(name asc)`);
  return { props: { composers } };
}
