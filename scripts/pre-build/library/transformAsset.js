const transformAsset = async (sourcePath, sourceContents) => {
  if (sourcePath.endsWith("content/shared/js/app.js")) {
    return sourceContents.replace(
      "window.addEventListener('DOMContentLoaded', addSupportNotice, false);",
      "// window.addEventListener('DOMContentLoaded', addSupportNotice, false);" +
        "// Line edited by pre-build script"
    );
  }
  if (sourcePath.endsWith("content/shared/js/skipto.js")) {
    return sourceContents.replace(
      "displayOption: 'static', // options: static (default), popup",
      "displayOption: 'popup', // Line edited by pre-build script"
    );
  }
  return sourceContents;
};

module.exports = transformAsset;
