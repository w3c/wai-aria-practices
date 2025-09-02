const transformAsset = async (sourcePath, sourceContents) => {
  if (sourcePath.endsWith("content/shared/js/app.js")) {
    return sourceContents
      .replace(
        "window.addEventListener('DOMContentLoaded', addExampleUsageWarning, false);",
        "// window.addEventListener('DOMContentLoaded', addExampleUsageWarning, false);" +
          " // Line edited by pre-build script"
      )
      .replace(
        "window.addEventListener('DOMContentLoaded', resolveSpecLinks, false);",
        "// window.addEventListener('DOMContentLoaded', resolveSpecLinks, false);" +
          " // Line edited by pre-build script"
      );
  }
  if (sourcePath.endsWith("content/shared/js/skipto.js")) {
    return sourceContents.replace(
      "displayOption: 'static', // options: static (default), popup",
      "displayOption: 'popup', // Line edited by pre-build script"
    );
  }
  if (sourcePath.endsWith("content/shared/js/read-this-first.js")) {
    return sourceContents.replace(
      "removeImageIfNeeded(bannerElement, config);",
      "removeImageIfNeeded(bannerElement, config);\n" +
      "      const img = bannerElement.querySelector('img'); // Line edited by pre-build script\n" +
      "      if (img) img.setAttribute('src', `${basePath}../../content-images/wai-aria-practices/images/read-this-first.svg`); // Line edited by pre-build script\n" +
      "      const a = bannerElement.querySelector('a'); // Line edited by pre-build script\n" +
      "      if (a) a.setAttribute('href', `${basePath}../../ARIA/apg/practices/read-me-first/`); // Line edited by pre-build script"
    )
  }
  return sourceContents;
};

module.exports = transformAsset;
