const res = require('./items');
const output = require('./output')

const {fileName, jsonData} = res();
//console.log('fileName' + fileName);
//console.log('jsonData' + jsonData);
output(fileName,jsonData)