
const fs = require('fs');
const path = require('path');
module.exports = ( filename, jsonData) => {
console.log('fileNam: '+ filename);
console.log(`\njsonData:\n\n ${jsonData}`);
const newFileName = path.join(__dirname, '../output',filename)
fs.writeFileSync(newFileName,jsonData)
}