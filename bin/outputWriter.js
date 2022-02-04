const fs = require('fs');
const path = require('path');

module.exports = ( filename, jsonData) => {
    logResultToconsole();
    writeFileOutput();

    function writeFileOutput() {
        const newFileName = path.join(__dirname, '../output', filename);
        fs.writeFileSync(newFileName, jsonData);
    }

    function logResultToconsole() {
        console.log(`fileNam: \n ${filename}\n`);
        console.log(`jsonData:\n ${jsonData}`);
    }
}