const getUpdatedJsonData = require('../lib/json-refactor/StepsCommands')
module.exports = () => {
    const fileName = 'single-test-summary-with-screenshots.json';
    const newJson = getUpdatedJsonData(fileName);
    return {
        fileName: fileName,
        jsonData:newJson

    }
  
}
