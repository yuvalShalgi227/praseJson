module.exports = (fileName) => {
    const dal = require('../json-dal')(fileName);
    const { getJson } = dal;

    function changeJsonData (fileName)  {
        const jsonData = getJson(fileName);
        iterateItems(jsonData);
        return JSON.stringify(jsonData)
    };

    function iterateItems(jsonData) {
        for (index in jsonData) {
            const data = jsonData[index];
            data['key'] = data['id'];
            addCommandDataToItems(data);
        }
    }

    function addCommandDataToItems(commandsJsonData) {
        let newItems= [];
        const commandsItems = commandsJsonData['commands'];
        for (itemIndex in commandsItems) {
            newItems.push({ "command": commandsItems[itemIndex] });
        }
        commandsJsonData['items'] = newItems;
    }

    return changeJsonData(fileName)    

}
