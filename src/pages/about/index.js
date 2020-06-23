import React from "react";
import { get } from "lib/api";
import Layout from "components/Layout";

export default ({ about }) => {
  const { headline, subheadline, body } = about;
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto p-8 text-gray-100 pb-48 p-8">
        <h1 className="text-5xl font-bold leading-none">{headline}</h1>
        <h3 className="text-2xl leading-none mt-2 italic">{subheadline}</h3>

        <div
          className="text-base sm:text-xl leading-relaxed mt-10"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [about] = await get(`*[_type == 'about']`);

  return { props: { about } };
}
