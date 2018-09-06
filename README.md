# intercom-issue

Setup:

1. `npm install`
2. `cd platforms/ios`, `pod install`
3. Set the Intercom credentials in config.xml
4. `cordova build ios`
5. Open the iOS Workspace. You'll probably need to change the team and signing credentials to be your own.
6. Install the app on a device using XCode

Testing:
1. Stop running the app via XCode. Kill the app so it's no longer running at all on your device
2. Trigger a push notification via Intercom. You should receive it on the device.
3. Open push notification on the device, this should open the app.  Due to the deliberate delay in initializing cordova in the Javascript, it is unable to load the push notification once Intercom is finally loaded.
