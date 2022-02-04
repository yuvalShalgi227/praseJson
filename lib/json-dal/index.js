const fs = require('fs');
const path = require('path');

module.exports = () => {
    return function getJson(fileName) {
        const filePath = path.join(__dirname,'../../resources', fileName)
        let rawdata = fs.readFileSync(filePath);
        return JSON.parse(rawdata);
    }
}