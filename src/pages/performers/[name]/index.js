import { get } from "lib/api";
import { useRouter } from "next/router";
import Img from "@components/Img";

const Header = ({ name, instrument, onBack }) => {
  return (
    <header className="border-none flex items-center pb-4">
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
        <p className="font-regular text-xs leading-none text-gray-300 uppercase">
          {instrument}
        </p>
      </div>
    </header>
  );
};

export default ({ data }) => {
  const router = useRouter();

  return (
    <div className="max-w-screen-lg mx-auto text-gray-100 pb-48 p-4">
      <Header
        name={data.name}
        instrument={data.instrument}
        onBack={() => router.back()}
      />

      <div className="min-h-screen pb-32">
        <div>
          <div className="w-full sm:px-48 mt-4">
            <img
              className="w-full rounded-20"
              src={data.photo}
              alt={data.name}
            />
            {/* <Img
                      aspectRatio={4 / 3}
                      src={data.photo}
              alt={data.name}
                    /> */}
          </div>
        </div>

        <div className="sm:flex justify-between mt-10">
          <h3 className="w-full sm:w-6/12 text-2xl sm:text-3xl font-extrabold">
            About
          </h3>
          <p className="w-full sm:w-6/12 text-base sm:text-xl leading-relaxed">
            {data.biography}
          </p>
        </div>

        {data.instrument && (
          <div className="sm:flex justify-between items-center mt-10">
            <h3 className="w-full smw-6/12 text-2xl sm:text-3xl font-extrabold">
              Instrument
            </h3>
            <div className="w-full smw-6/12 mt-2">
              <p className="text-base sm:text-xl uppercase">
                {data.instrument}
              </p>
            </div>
          </div>
        )}

        {data.website && (
          <div className="sm:flex justify-between items-center mt-10">
            <h3 className="w-full smw-6/12 text-2xl sm:text-3xl font-extrabold">
              Connect
            </h3>
            <div className="w-full smw-6/12 text-base sm:text-xl mt-2">
              <a href={data.website} className="text-indigo-500">
                {data.website}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const compositions = await get(`*[_type == 'performers']`);
  const paths = compositions.map((_) => _.slug);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await get(
    `*[_type == 'performers' && slug == '/performers/${params.name}'][0]`
  );

  return { props: { data } };
}
