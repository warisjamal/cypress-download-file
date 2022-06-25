const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const { isFileExist } = require('cy-verify-downloads');

module.exports = defineConfig({
  chromeWebSecurity: false,
  downloadsFolder: 'cypress/downloads',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile}),
      on('task', { isFileExist })
    },
    experimentalSessionAndOrigin: true,
    requestTimeout: 5000,
    "defaultCommandTimeout": 100000,
    "pageLoadTimeout": 100000
  },
});
