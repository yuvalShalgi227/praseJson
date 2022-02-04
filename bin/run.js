const output = require('./outputWriter')
const getUpdatedJsonData = require('../lib/json-refactor/StepsCommands')

const fileName = 'single-test-summary-with-screenshots.json';
const jsonData = getUpdatedJsonData(fileName);
output(fileName,jsonData)