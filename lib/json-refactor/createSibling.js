module.exports = (jsonData,jsonTemplte) => {

    function iterateOnItems(jsonData) {
        for (index in jsonData) {
            const data = jsonData[index];
            addDataToSibling(data);
        }
    }

    function addDataToSibling(data) {
        data[jsonTemplte.keyToadd] = data[jsonTemplte.keyToCopy];
        addNestedItems(data);
    }

    function addNestedItems(orgJson) {
        let newNested= [];
        const orgNested = orgJson[jsonTemplte.nestedkeyToCopy];
        accumulateNestedItems(orgNested, newNested);
        orgJson[jsonTemplte.nestedkeyToadd] = newNested;
    }

    function accumulateNestedItems(orgItems, newItems) {
        for (itemIndex in orgItems) {
            newItems.push({ [jsonTemplte.newNestedItemKey]: orgItems[itemIndex] });
        }
    }
    
    return iterateOnItems(jsonData)    

}
