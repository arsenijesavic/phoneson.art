import React from "react";
import Link from "next/link";
import { get } from "lib/api";
import Img from "../../components/Img";

export default ({ composers }) => {
  return (
    <div className="max-w-screen-lg mx-auto text-gray-100 pb-48">
      <h1 className="text-4xl font-bold">Composers</h1>

      <div className="mt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
          {composers.map((composer, index) => (
            <li key={index} className="mt-6">
              <Link href={composer.slug}>
                <a>
                  <Img
                    aspectRatio={4 / 3}
                    src={composer.photo}
                    alt={composer.name}
                  />

                  {console.log(composer)}
                  <hgroup className="text-center">
                    <h1 className="text-2xl leading-none mt-2">
                      {composer.name}
                    </h1>
                    <h3 className="text-xs sm:text-base text-gray-300 leading-none mt-2">
                      {composer.country}
                    </h3>
                  </hgroup>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const composers = await get(`*[_type == 'composers']|order(date desc)`);
  return { props: { composers } };
}
