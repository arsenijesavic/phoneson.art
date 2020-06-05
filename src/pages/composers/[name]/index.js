import { get } from "lib/api";

export default ({ data }) => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-screen px-4 pb-32 text-gray-100">
      <div>
        <h1 className="text-4xl sm:text-6xl text-center ">{data.name}</h1>
        <div className="w-full sm:px-48">
          <img className="w-full rounded-20" src={data.photo} alt={data.name} />
        </div>
      </div>

      <div className="sm:flex justify-between mt-10">
        <h3 className="w-full smw-6/12 text-2xl sm:text-3xl font-extrabold">
          About
        </h3>
        <p className="w-full smw-6/12 text-base sm:text-xl leading-relaxed">
          {data.biography}
        </p>
      </div>

      <div className="sm:flex justify-between items-center mt-10">
        <h3 className="w-full sm:w-6/12 text-2xl sm:text-3xl font-extrabold">
          Location
        </h3>
        <div className="w-full sm:w-6/12 text-xl">
          <p className="text-base sm:text-xl">📍 {data.country}</p>
        </div>
      </div>

      <div className="sm:flex justify-between items-center mt-10">
        <h3 className="w-full smw-6/12 text-2xl sm:text-3xl font-extrabold">
          Connect
        </h3>
        <div className="w-full smw-6/12 text-base sm:text-xl">
          <a href={data.website} className="text-indigo-500">
            🔗 {data.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const compositions = await get(`*[_type == 'composers']`);
  const paths = compositions.map((_) => _.slug);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [data] = await get(
    `*[_type == 'composers' && slug == '/composers/${params.name}']`
  );

  return {
    props: { data },
  };
}
