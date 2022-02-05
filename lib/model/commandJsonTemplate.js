//create the commands json template to be createSibling.js
const jsonTemplate = require('./createJsonFromTemplate');

module.exports = () => {
    return jsonTemplate('id','key','commands','items','command');
}