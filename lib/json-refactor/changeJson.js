module.exports = (fileName) => {
    const getJson = require('../json-dal')();
    const commandTemplateJson = require('../model/commandJsonTemplate');
    const createSiblingJsonValues = require('./createSibling');
    function changeJsonData (fileName)  {        
        const jsonData = getJson(fileName);
        createSiblingJsonValues(jsonData,commandTemplateJson());
        return JSON.stringify(jsonData, null, 4)
    };

    return changeJsonData(fileName);
}