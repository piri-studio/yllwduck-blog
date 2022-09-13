module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}