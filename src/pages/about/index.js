import React from "react";
import { get } from "lib/api";

export default ({ about }) => {
  const { headline, subheadline, body } = about;
  return (
    <div className="max-w-screen-lg mx-auto p-8 text-gray-100 pb-48">
      <h1 className="text-5xl font-bold leading-none">{headline}</h1>
      <h3 className="text-2xl leading-none mt-2 italic">{subheadline}</h3>

      <div
        className="text-xl leading-relaxed mt-10"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export async function getStaticProps() {
  const [about] = await get(`*[_type == 'about']`);

  return { props: { about } };
}
