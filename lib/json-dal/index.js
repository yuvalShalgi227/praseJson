
const fs = require('fs');
const path = require('path');

module.exports = ({fileName}) => {
    outPutFileName = 'output_' + fileName;
    return {getJson}
    
    function printValues(obj) {
        for(var k in obj) {
            if(obj[k] instanceof Object) {
                printValues(obj[k]);
            } else {
                document.write(obj[k] + "<br>");
            };
        }
    };

    function getJson(fileName) {
        const filePath = path.join(__dirname,'../../resources', fileName)
        let rawdata = fs.readFileSync(filePath);

        return JSON.parse(rawdata);
    }

}