const { defineConfig } = require("cypress");

const extensionPath = __dirname + "/web-ext-artifacts/";
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        console.log("Loading imgur-duck-proxy extension");
        launchOptions.extensions.push(extensionPath);
        return launchOptions;
      });
    },
  },
  video: false,
});
