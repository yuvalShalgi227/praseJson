//use this class as a factory for object create
module.exports = (keyToCopy, keyToadd, nestedkeyToCopy,nestedkeyToadd, newNestedItemKey) => {
    return {
        keyToCopy : keyToCopy,
        keyToadd : keyToadd,
        nestedkeyToCopy : nestedkeyToCopy,
        nestedkeyToadd : nestedkeyToadd,
        newNestedItemKey : newNestedItemKey
    }
}