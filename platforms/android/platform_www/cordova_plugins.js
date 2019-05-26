cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation.android",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.android.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "merges": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-spinner.SpinnerPlugin",
    "file": "plugins/cordova-plugin-spinner/www/spinner-plugin.js",
    "pluginId": "cordova-plugin-spinner",
    "clobbers": [
      "SpinnerPlugin"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
    "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
    "pluginId": "cordova-plugin-android-fingerprint-auth",
    "clobbers": [
      "FingerprintAuth"
    ]
  },
  {
    "id": "cordova-plugin-deviceinformation.DeviceInformation",
    "file": "plugins/cordova-plugin-deviceinformation/www/deviceinformation.js",
    "pluginId": "cordova-plugin-deviceinformation",
    "clobbers": [
      "cordova.plugins.deviceInformation"
    ]
  },
  {
    "id": "cordova-plugin-permission.Permission",
    "file": "plugins/cordova-plugin-permission/www/index.js",
    "pluginId": "cordova-plugin-permission",
    "clobbers": [
      "window.plugins.Permission"
    ]
  },
  {
    "id": "cordova-plugin-permission.tests",
    "file": "plugins/cordova-plugin-permission/tests/index.spec.js",
    "pluginId": "cordova-plugin-permission"
  },
  {
    "id": "cordova-plugin-sim.Sim",
    "file": "plugins/cordova-plugin-sim/www/sim.js",
    "pluginId": "cordova-plugin-sim",
    "merges": [
      "window.plugins.sim"
    ]
  },
  {
    "id": "cordova-plugin-sim.SimAndroid",
    "file": "plugins/cordova-plugin-sim/www/android/sim.js",
    "pluginId": "cordova-plugin-sim",
    "merges": [
      "window.plugins.sim"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-pdf-generator.pdf",
    "file": "plugins/cordova-pdf-generator/www/pdf.js",
    "pluginId": "cordova-pdf-generator",
    "clobbers": [
      "cordova.plugins.pdf",
      "pugin.pdf",
      "pdf"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-camera": "2.0.0",
  "cordova-plugin-dialogs": "1.3.4",
  "cordova-plugin-screen-orientation": "1.4.2",
  "cordova-plugin-spinner": "1.1.0",
  "cordova-plugin-whitelist": "1.3.0",
  "cordova-plugin-network-information": "2.0.1",
  "cordova-plugin-android-fingerprint-auth": "1.5.0",
  "cordova-plugin-deviceinformation": "2.0.2",
  "cordova-plugin-permission": "0.1.0",
  "cordova-plugin-sim": "1.3.3",
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-pdf-generator": "2.0.4"
};
// BOTTOM OF METADATA
});