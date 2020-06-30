import React from "react";
import Link from "next/link";
import { get } from "lib/api";
import Layout from "components/Layout";
import Embed from "components/Embed";
import Img from "components/Img";

export default ({ about, performers }) => {
  const { headline, subheadline, body } = about;
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-8 text-gray-100 pb-48">
        <header className="py-8">
          <h1 className="text-5xl sm:text-6xl font-bold leading-none">
            {headline}
          </h1>
          <h3 className="text-xl sm:text-2xl leading-none mt-2 italic">
            {subheadline}
          </h3>
        </header>

        <div
          className="text-base sm:text-xl leading-relaxed mt-10"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <div className="my-16">
          <Embed src="https://www.youtube.com/embed/kMJq6rnFNm4" />
        </div>

        <div className="mt-24 pb-8">
          <h1 className="text-3xl font-bold">Performers</h1>

          <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            {performers.map((composer, index) => (
              <li key={index} className="mt-4">
                <Link href={composer.slug}>
                  <a>
                    <Img
                      aspectRatio={1 / 1}
                      src={composer.photo}
                      alt={composer.name}
                    />

                    <hgroup className="">
                      <h3 className="text-base text-gray-400 leading-none mt-2">
                        {composer.instrument}
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
  const about = await get(`*[_type == 'about'][0]`);
  const performers = await get(`*[_type == 'performers']|order(date desc)`);
  return { props: { about, performers } };
}
