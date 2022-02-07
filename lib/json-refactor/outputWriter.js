const fs = require('fs');
const path = require('path');

module.exports = ( filename, jsonData) => {
    consoleLog();
    writeFile();

    function writeFile() {
        const newFileName = path.join(__dirname, '../../output', filename);
        fs.writeFileSync(newFileName, jsonData);
    }

    function consoleLog() {
        console.log(`fileNam: \n ${filename}\n`);
        console.log(`jsonData:\n ${jsonData}`);
    }
}