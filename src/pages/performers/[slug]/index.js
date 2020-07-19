import React from "react";
import { useRouter } from "next/router";
import { get } from "lib/api";

import Img from "@components/Img";

const Header = ({ title, onBack }) => {
  return (
    <header className="border-none flex items-center py-8">
      <div className="pr-4 cursor-pointer" onClick={onBack}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-teal-500 hover:text-teal-300"
        >
          <path d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" />
        </svg>
      </div>

      <div>
        <h1 className="text-gray-100 text-2xl leading-none">{title}</h1>
      </div>
    </header>
  );
};

export default ({ data }) => {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-auto px-8 sm:px-16 text-gray-100 pb-16">
      <Header title={data.name} onBack={() => router.back()} />

      <div className="mt-4 sm:grid grid-cols-12 gap-4 sm:gap-8">
        <div className="col-span-5">
          <Img aspectRatio={1} src={data.photo} alt={data.name} />

          <div className="mt-4">
            <p className="mt-2 text-gray-300 text-base sm:text-xl capitalize">
              {data.instrument}
            </p>

            <h1 className="mt-2 text-gray-100 text-2xl sm:text-4xl leading-tight">
              {data.name}
            </h1>

            <p className="mt-2 text-base sm:text-xl">
              <a
                href={data.website}
                className="text-indigo-500 hover:text-indigo-700"
              >
                {data?.website?.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}
              </a>
            </p>
          </div>
        </div>

        <div className="col-span-7">
          <div className="mt-6 sm:mt-0">
            <p className="w-full text-base sm:text-xl leading-relaxed">
              {data.biography}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const compositions = await get(`*[_type == 'performers']`);
  const paths = compositions.map((_) => _.slug);
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const data = await get(
    `*[_type == 'performers' && slug == '/performers/${slug}'][0]`
  );
  return { props: { data } };
}
