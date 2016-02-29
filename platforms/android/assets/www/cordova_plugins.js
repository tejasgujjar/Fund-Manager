cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.loicknuchel.cordova.deviceaccounts/www/DeviceAccounts.js",
        "id": "org.loicknuchel.cordova.deviceaccounts.DeviceAccounts",
        "clobbers": [
            "plugins.DeviceAccounts"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.3.0",
    "org.loicknuchel.cordova.deviceaccounts": "0.0.1"
}
// BOTTOM OF METADATA
});