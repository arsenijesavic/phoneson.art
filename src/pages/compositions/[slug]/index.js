import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { get } from "lib/api";

// import VolunteerChorus from "components/compositions/1-volunteer-chorus";
import OneBitFlow from "components/compositions/2-one-bit-flow";
// import SteadyShot from "components/compositions/3-steady-shot";
import ComAppData from "components/compositions/4-comappdata";
import TheUpgrade from "components/compositions/5-the-upgrade";
import NoMusicEarpieces from "components/compositions/6-nomusic-earpieces";
import Menuer4Phones from "components/compositions/7-menuer4phones";

const compositions = {
  [`/compositions/volunteer-chorus`]: () => <div></div>,
  [`/compositions/one-bit-flow`]: OneBitFlow,
  [`/compositions/steady-shot`]: () => <div></div>,
  [`/compositions/comappdata`]: ComAppData,
  [`/compositions/the-upgrade`]: TheUpgrade,
  [`/compositions/nomusic-earpieces`]: NoMusicEarpieces,
  [`/compositions/menuer4phones`]: Menuer4Phones,
};

const Header = ({ name, compositors, onBack }) => {
  return (
    <header className="flex items-center p-4 border-none ">
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
        <h1 className="text-gray-100 text-2xl leading-none">{name}</h1>
        <ul>
          {compositors.map((composer, index) => (
            <li key={index}>
              <Link href={composer.slug}>
                <a>
                  <p className="font-regular text-xs leading-none text-gray-300 uppercase hover:text-indigo-500">
                    {composer.name}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const InstructionModal = ({ body, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div
        className="bg-white rounded-lg  shadow-xl transform transition-all max-w-lg w-full max-h-screen overflow-scroll"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900 font-bold"
                id="modal-headline"
              >
                Instructions
              </h3>
              <div className="mt-2 ">
                <p
                  className="text-sm leading-5 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6">
          <button
            onClick={() => onClose()}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default ({ data }) => {
  const router = useRouter();
  const [isInstructionOpen, setInstructionOpen] = useState(true);
  if (!data) return null;

  const { slug, name, compositors, body } = data;
  const Composition = compositions[slug] ? compositions[slug] : null;

  return (
    <div className="max-w-screen-xl mx-auto sm:px-16 text-gray-100">
      <div className="w-full min-h-screen flex flex-col">
        <Header
          name={name}
          compositors={compositors}
          onBack={() => router.back()}
        />

        <Composition {...data} />

        <InstructionModal
          body={body}
          isOpen={isInstructionOpen}
          onClose={() => setInstructionOpen(false)}
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const compositions = await get(`*[_type == 'composition']`);
  const paths = compositions.map((_) => _.slug);
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const data = await get(
    `*[_type == 'composition' && slug == '/compositions/${slug}'][0]{
      ...,
      "compositors": *[_type == 'composers' && name in ^.compositors[]]
    }`
  );
  return { props: { data } };
}
