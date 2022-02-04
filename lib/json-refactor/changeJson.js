module.exports = (fileName) => {
    const getJson = require('../json-dal')();
    const changeCommands = require('./commands')
    function changeJsonData (fileName)  {        
        const jsonData = getJson(fileName);
        changeCommands(jsonData);
        return JSON.stringify(jsonData, null, 4)
    };

    return changeJsonData(fileName);
}