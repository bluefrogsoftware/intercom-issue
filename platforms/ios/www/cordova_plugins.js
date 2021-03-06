cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "cordova-plugin-intercom.Intercom",
    "file": "plugins/cordova-plugin-intercom/www/intercom.js",
    "pluginId": "cordova-plugin-intercom",
    "clobbers": [
      "intercom",
      "cordova.plugins.intercom",
      "plugin.intercom"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-plugin-push": "2.2.3",
  "cordova-plugin-intercom": "6.1.0"
};
// BOTTOM OF METADATA
});