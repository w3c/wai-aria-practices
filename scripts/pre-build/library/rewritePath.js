const path = require("path");
const determineContentType = require("./determineContentType");

const contentRoot = path.resolve(
  __dirname,
  "../../../_external/aria-practices/content"
);

const buildRoot = path.resolve(__dirname, "../../../ARIA/apg");

const rewriteFilePath = (filePath) => {
  const contentType = determineContentType(filePath);

  const githubPath = path.relative(contentRoot, filePath);

  let buildRelative;
  if (contentType === "asset") {
    buildRelative = githubPath;
  } else {
    buildRelative = githubPath.replace(/\.html$/, ".md");
  }

  const buildPath = path.resolve(buildRoot, buildRelative);

  const sitePath = getSitePath(buildPath, contentType);

  return { githubPath, buildPath, sitePath };
};

const getSitePath = (buildPath, contentType) => {
  const buildRelative = path.relative(buildRoot, buildPath);

  switch (contentType) {
    case "pattern":
      return buildRelative.replace(/\/[^/]+-pattern\.md/, "/");
    case "example":
      return buildRelative.replace(/examples\/([^/])\.md/, "examples/$1/");
    case "practice":
      return buildRelative.replace(
        /practices\/([^/]+)\/[^/]+\.md/,
        "practices/$1/"
      );
    case "homepage":
      return buildRelative.replace(/index\.md/, "");
    case "exampleIndex":
      return buildRelative.replace(/index\/index\.md/, "example-index/");
    case "otherPage":
      return buildRelative.replace(/\/([^/]+)\.md/, "$1/");
    case "asset":
      return buildRelative;
    default:
      throw new Error(`Script did not recognize content type ${contentType}`);
  }
};

const rewriteRelativePath = (relativePath, { onFilePath }) => {
  const onBuildPath = rewriteFilePath(onFilePath);
  const filePath = path.resolve(onBuildPath, relativePath);
  const buildPath = rewriteFilePath(filePath);

  const siteRootPath = getSitePath(buildPath, determineContentType(filePath));
  const onSitePath = getSitePath(onBuildPath, determineContentType(onFilePath));
  const siteRelativePath = path.relative(onSitePath, siteRootPath);

  return { siteRelativePath, siteRootPath, buildPath };
};

module.exports = { rewriteFilePath, rewriteRelativePath };
