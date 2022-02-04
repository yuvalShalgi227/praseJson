module.exports = (fileName) => {
    const dal = require('../json-dal')(fileName);
    const { getJson } = dal;

    function changeJsonData (fileName)  {
        const jsonData = getJson(fileName);
        for (index in jsonData) {
            const data = jsonData[index];
            data['key'] = data['id']
            getCommandItems(data);
        }
        return JSON.stringify(jsonData)
    };
    function getCommandItems(commandsJsonData) {
        let newItems= [];
        const commandsItems = commandsJsonData['commands'];
        for (itemIndex in commandsItems) {
            newItems.push({ "command": commandsItems[itemIndex] });
        }
        commandsJsonData['items'] = newItems;
    }

    return changeJsonData(fileName)    

}
