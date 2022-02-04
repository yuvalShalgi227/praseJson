const dal = require('../json-dal')();

module.exports = (fileName) => {
    const { getJson } = dal;

    function changeJsonData (fileName)  {
        const jsonData = getJson(fileName);
        iterateOnItems(jsonData);
        return JSON.stringify(jsonData, null, 4)
    };

    function iterateOnItems(jsonData) {
        for (index in jsonData) {
            const data = jsonData[index];
            addNewDataToJsonCommands(data);
        }
    }

    function addNewDataToJsonCommands(data) {
        data['key'] = data['id'];
        addCommandDataToItems(data);
    }

    function addCommandDataToItems(commandsJsonData) {
        let commandsDetails= [];
        const commandsItems = commandsJsonData['commands'];
        getCommandsData(commandsItems, commandsDetails);
        commandsJsonData['items'] = commandsDetails;
    }

    function getCommandsData(commandsItems, commandsDetails) {
        for (itemIndex in commandsItems) {
            commandsDetails.push({ "command": commandsItems[itemIndex] });
        }
    }
    
    return changeJsonData(fileName)    




}
