const wrapHtmlFunction = (htmlFormatter) => {
  return (...apiArgs) => {
    // Last argument
    const getHtmlFunction = apiArgs.splice(apiArgs.length - 1)[0];
    return (...htmlFunctionArgs) => {
      const html = getHtmlFunction(...htmlFunctionArgs);
      return htmlFormatter(...apiArgs, html);
    };
  };
};

module.exports = wrapHtmlFunction;
