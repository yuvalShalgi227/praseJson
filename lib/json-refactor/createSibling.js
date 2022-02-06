module.exports = (jsonData,jsonTemplte) => {

    const {keyToCopy, keyToadd, nestedkeyToCopy, nestedkeyToadd, newNestedItemKey} = jsonTemplte;

    function iterateOnItems(jsonData) {
        for (index in jsonData) {
            const data = jsonData[index];
            addDataToSibling(data);
        }
    }

    function addDataToSibling(data) {
        data[keyToadd] = data[keyToCopy];
        addNestedItems(data);
    }

    function addNestedItems(orgJson) {
        let newNested= [];
        const orgNested = orgJson[nestedkeyToCopy];
        accumulateNestedItems(orgNested, newNested);
        orgJson[nestedkeyToadd] = newNested;
    }
    //todo i can not refactor nestedkeyToadd :( , (newParentKey)

    function accumulateNestedItems(orgItems, newItems) {
        for (itemIndex in orgItems) {
            newItems.push({ [newNestedItemKey]: orgItems[itemIndex] });
        }
    }
    /* 
        for example assume that jsonTemplte has this stracture: {newNestedItemKey: "command", }
        newItems = items : [{"command": {orgItems[0] }},{"command": {orgItems[1]}}... ]
        
    
   */
    
    return iterateOnItems(jsonData)    

}
