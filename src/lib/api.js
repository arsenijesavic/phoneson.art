const { parse, evaluate } = require("groq-js");
const markdown = require("../../content/markdown.json");

const dataset = [...markdown];

export const get = async (query) => {
  const tree = parse(query);
  const value = await evaluate(tree, { dataset });
  const result = await value.get();
  return result;
};
