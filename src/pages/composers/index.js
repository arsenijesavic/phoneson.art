import React from "react";
import Link from "next/link";
import { get } from "lib/api";
import Layout from "components/Layout";
import Img from "components/Img";

export default ({ composers }) => {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-8 text-gray-100 pb-48">
        <header className="py-8">
          <h1 className="text-5xl sm:text-6xl font-bold leading-none">
            Composers
          </h1>
          <h3 className="text-xl sm:text-2xl leading-none mt-2 italic">
            List of composers
          </h3>
        </header>

        <div className="mt-10">
          <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            {composers.map((composer, index) => (
              <li key={index} className="mt-4">
                <Link href={composer.slug}>
                  <a>
                    <Img
                      aspectRatio={1 / 1}
                      src={composer.photo}
                      alt={composer.name}
                      style={{ filter: "grayscale(100%)" }}
                    />

                    <hgroup className="">
                      <h3 className="text-base text-gray-400 leading-none mt-2">
                        {composer.country}
                      </h3>
                      <h1 className="text-xl text-gray-100 leading-none mt-2">
                        {composer.name}
                      </h1>
                    </hgroup>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const composers = await get(`*[_type == 'composers']|order(date desc)`);
  return { props: { composers } };
}
