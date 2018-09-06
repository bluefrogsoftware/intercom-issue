cordova.define("cordova-plugin-directions.Directions", function(require, exports, module) {

var exec = require("cordova/exec");

var Directions = function () {
    this.name = "Directions";
};

Directions.prototype.navigateTo = function (latitude, longitude, showSource) {
    showSource = (showSource == null ? true : showSource);
    exec(null, null, "Directions", "navigateTo", [{latitude: latitude, longitude: longitude, showSource: showSource}]);
};

Directions.prototype.navigateToAddress = function (address, showSource) {
    showSource = (showSource == null ? true : showSource);
    exec(null, null, "Directions", "navigateTo", [{address: address, showSource: showSource}]);
};

module.exports = new Directions();

});
