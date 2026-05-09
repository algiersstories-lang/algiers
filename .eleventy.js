module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: ".",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/algiers/"
  };
};
