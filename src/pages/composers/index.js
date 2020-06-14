import React from "react";
import Link from "next/link";
import { get } from "lib/api";
import Img from "../../components/Img";

export default ({ composers }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-8 text-gray-100 pb-48">
      <h1 className="text-4xl font-bold uppercase">Composers</h1>

      <div className="mt-10">
        <ul>
          {composers.map((composer, index) => (
            <li key={index} className="mt-6">
              <Link href={composer.slug}>
                <a>
                  <Img
                    aspectRatio={4 / 3}
                    src={composer.photo}
                    alt={composer.name}
                  />

                  <h1 className="text-2xl sm:text-6xl text-center ">
                    {composer.name}
                  </h1>
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
