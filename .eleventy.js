const csvtojson = require("csvtojson");

module.exports = function(eleventyConfig) {
  // This is the "Translator" for CSV files
  eleventyConfig.addDataExtension("csv", async (contents) => {
    return await csvtojson().fromString(contents);
  });

  return {
    dir: {
      input: ".",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/algiers/"
  };
};
