const path = require("path");
const determineContentType = require("./determineContentType");

const sourceRoot = path.resolve(__dirname, "../../../_external/aria-practices");

const projectRoot = path.resolve(__dirname, "../../../");
const buildRoot = path.resolve(__dirname, "../../../ARIA/apg");

const dirname = (sitePath) => {
  if (sitePath.endsWith("/") || sitePath === "") return sitePath;
  const pathComponents = sitePath.split("/");
  pathComponents.splice(-1, 1);
  return pathComponents.join("/") + "/";
};

const relative = (sitePath1, sitePath2) => {
  if (sitePath2.endsWith("/") && sitePath1 !== sitePath2) {
    return path.relative(sitePath1, sitePath2) + "/";
  }
  return path.relative(sitePath1, sitePath2);
};

const rewriteSourcePath = (sourcePath) => {
  const contentType = determineContentType(sourcePath);

  const githubPath = relative(sourceRoot, sourcePath);

  let buildRelative = githubPath.replace(/^content\//, "");
  if (contentType === "template") {
    return { githubPath, buildPath: null, sitePath: null };
  }
  if (contentType !== "htmlAsset") {
    buildRelative = buildRelative.replace(/\.html$/, ".md");
  }

  let buildPath = path.resolve(buildRoot, buildRelative);
  if (contentType === "imageAsset") {
    buildPath = path.resolve(
      projectRoot,
      `content-images/wai-aria-practices/${buildRelative}`
    );
  } else if (contentType === "otherAsset") {
    buildPath = path.resolve(
      projectRoot,
      `content-assets/wai-aria-practices/${buildRelative}`
    );
  }

  const sitePath = getSitePath(buildPath, contentType);

  return { githubPath, buildPath, sitePath };
};

const getSitePath = (buildPath, contentType) => {
  const buildRelative = relative(buildRoot, buildPath);

  switch (contentType) {
    case "pattern":
      return buildRelative.replace(/\/[^/]+-pattern\.md/, "/");
    case "example":
      return buildRelative.replace(/examples\/([^/]+)\.md/, "examples/$1/");
    case "practice":
      return buildRelative.replace(
        /practices\/([^/]+)\/[^/]+\.md/,
        "practices/$1/"
      );
    case "aboutPage":
      const match = buildRelative.match(/about\/([^/]+)\/([^/]+)\.md/);
      if (!match) throw new Error("Unexpected about page error");
      if (
        match[1] === match[2] ||
        (match[1] === "coverage-and-quality" &&
          match[2] === "coverage-and-quality-report")
      ) {
        return buildRelative.replace(
          /about\/([^/]+)\/([^/]+)\.md/,
          "about/$1/"
        );
      } else {
        return buildRelative.replace(
          /about\/([^/]+)\/([^/]+)\.md/,
          "about/$1/$2/"
        );
      }
    case "homepage":
      return buildRelative.replace(/apg-home\.md/, "");
    case "exampleIndex":
      return buildRelative.replace(/index\/index\.md/, "example-index/");
    case "patternIndex":
      return buildRelative.replace(/patterns\/patterns\.md/, "patterns/");
    case "practiceIndex":
      return buildRelative.replace(/practices\/practices\.md/, "practices/");
    case "aboutIndex":
      return buildRelative.replace(/about\/about\.md/, "about/");
    case "imageAsset":
    case "htmlAsset":
    case "otherAsset":
      return buildRelative;
    case "template":
      return null;
    default:
      throw new Error(`Script did not recognize content type ${contentType}`);
  }
};

const rewriteRelativePath = (
  relativePathAndHash,
  {
    onSourcePath,
    // Only needed for templates. This is required because templates have a 
    // sourcePath (the template file) but they lack a predetermined buildPath 
    // (which will be wherever the template is used).
    optionalTemplateSourcePath,
  }
) => {
  let onBuildPath = rewriteSourcePath(onSourcePath).buildPath;

  const [relativePathAndQuery, hash] = relativePathAndHash.split("#");
  const [relativePath, queryString] = relativePathAndQuery.split("?");

  const sourcePath = path.resolve(
    dirname(optionalTemplateSourcePath || onSourcePath),
    relativePath
  );
  const { buildPath } = rewriteSourcePath(sourcePath);

  const siteRootPathPreHash = getSitePath(
    buildPath,
    determineContentType(sourcePath)
  );
  const onSitePath = getSitePath(
    onBuildPath,
    determineContentType(onSourcePath)
  );
  const siteRelativePathPreHash = relative(
    dirname(onSitePath),
    siteRootPathPreHash
  );

  const queryStringFormatted = queryString ? `?${queryString}` : "";
  const hashFormatted = hash ? `#${hash}` : "";
  const siteRootPath = `${siteRootPathPreHash}${hashFormatted}`;
  const siteRelativePath = `${siteRelativePathPreHash}${queryStringFormatted}${hashFormatted}`;

  return { siteRelativePath, siteRootPath, sourcePath, buildPath };
};

module.exports = {
  rewriteSourcePath,
  rewriteRelativePath,
  sourceRoot,
  buildRoot,
};
