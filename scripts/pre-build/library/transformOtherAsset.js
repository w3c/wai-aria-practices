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
  // TODO: This transform is temporary. See https://github.com/w3c/wai-aria-practices/issues/225
  if (sourcePath.endsWith("content/patterns/feed/examples/js/feedDisplay.js")) {
    return sourceContents.replace(
        "'src=\"imgs/rating-' +",
        "'src=\"../../../../../content-assets/wai-aria-practices/patterns/feed/examples/imgs/rating-' +"
    )
  }
  return sourceContents;
};

module.exports = transformAsset;
