const fs = require('fs');
const { combineAllure } = require('./src/combine-allure');

const [allureReportDir] = process.argv.slice(2);
if (allureReportDir === undefined) {
  throw new Error('Please specify the allure-report directory\nE.g: node ./combine.js ../allure-report');
}

if (!fs.existsSync(allureReportDir)) {
  throw new Error(`Cannot find directory '${allureReportDir}'`);
}

if (!fs.lstatSync(allureReportDir).isDirectory()) {
  throw new Error(`'${allureReportDir}' exists, but it is not a valid allure-report directory`);
}

combineAllure(allureReportDir);
