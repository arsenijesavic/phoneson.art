const fs = require("fs");
const glob = require("glob");
const { join } = require("path");
const matter = require("gray-matter");

glob("**/*.md", (error, _files) => {
  const files = _files.filter((_) => _.includes("content"));
  const data = files.map((file) => {
    const _path = join(process.cwd(), file);
    const _md = fs.readFileSync(_path, "utf8");
    const { data, content: body } = matter(_md);

    return {
      fileAbsolutePath: _path,
      ...data,
      body,
    };
  });

  fs.writeFile("./content/markdown.json", JSON.stringify(data), (err) => {
    if (err) console.error("ERROR", err);
    console.info("✅ Source Markdown");
  });
});
