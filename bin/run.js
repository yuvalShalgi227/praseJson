const fs = require('fs');
const path = require('path');
const output = require('./outputWriter')
const getUpdatedJsonData = require('../lib/json-refactor/commands')

const resourceDir= path.join(__dirname,'../resources')
const filesInFolder = fs.readdirSync(resourceDir);

filesInFolder.forEach((fileName) => {
    output(fileName,getUpdatedJsonData(fileName));
})
