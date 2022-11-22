const removeDuplicateMainTag = (body) => {
  return body.replace(/<main/, "<div").replace(/<\/main>/, "</div>");
};

module.exports = removeDuplicateMainTag;
