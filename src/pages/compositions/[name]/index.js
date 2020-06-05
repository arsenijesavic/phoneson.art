import { useRouter } from "next/router";
import { get } from "lib/api";
import ReactMarkdown from "react-markdown/with-html";

export default ({ composition }) => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen">
      <header className="flex justify-between items-center p-4">
        <div onClick={() => router.back()}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-teal-500"
          >
            <path d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" />
          </svg>
        </div>
        <div>
          <h1 className="text-gray-100 text-4xl">{composition.name}</h1>
        </div>
      </header>

      <ReactMarkdown
        className="max-w-screen-lg mx-auto pt-10"
        source={composition.body}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const compositions = await get(`*[_type == 'composition']`);
  const paths = compositions.map((_) => _.slug);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [composition] = await get(
    `*[_type == 'composition' && slug == '/compositions/${params.name}']|order(date desc) [0..10]{
      ...,
      "compositors": *[_type == 'composers' && name in ^.compositors[]]
    }`
  );

  return {
    props: { composition },
  };
}
