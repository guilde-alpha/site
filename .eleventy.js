const markdownIt = require("markdown-it");
const md = markdownIt({ html: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("md", (content) => md.renderInline(content || ""));

  // Passthrough copies
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");

  // Watch Tailwind source for changes
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
