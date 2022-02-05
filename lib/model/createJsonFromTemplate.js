//use this class as a factory for object create
module.exports = (keyToCopy, keyToadd, nestedkeyToCopy,nestedkeyToadd, newNestedItemKey) => {
    class JsonTemplate {
        constructor(keyToCopy, keyToadd, nestedkeyToCopy,nestedkeyToadd, newNestedItemKey) {
            this.keyToCopy = keyToCopy;
            this.keyToadd = keyToadd;
            this.nestedkeyToCopy = nestedkeyToCopy;
            this.nestedkeyToadd = nestedkeyToadd;
            this.newNestedItemKey = newNestedItemKey;
        }
    }
    return new JsonTemplate(keyToCopy, keyToadd, nestedkeyToCopy,nestedkeyToadd, newNestedItemKey);
}