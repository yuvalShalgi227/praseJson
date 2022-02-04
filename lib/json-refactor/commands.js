module.exports = (jsonData) => {

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
    
    return iterateOnItems(jsonData)    

}
