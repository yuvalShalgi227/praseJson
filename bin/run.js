const fs = require('fs');
const path = require('path');
const output = require('./outputWriter')
const getUpdatedJsonData = require('../lib/json-refactor/refactorCommandStepsExpectedData')

const resourceFolder= path.join(__dirname,'../resources')
const files = fs.readdirSync(resourceFolder);
files.forEach((file) => {
    const jsonData = getUpdatedJsonData(file);
    output(file,jsonData);
})
