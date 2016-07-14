# ReactNative103
Repository for the third workshop in react-native: The Native Side

## Getting Started. React Native Tools
You should have react native tools already installed. For those who not,  follow the instructions 
in the [react native website](https://facebook.github.io/react-native/docs/getting-started.html),
in order to install the packages needed to run react native apps

You can install the packages to build and run the app for android
(for MacOSX, Linux and Windows OSes) and/or for iOS (MacOSX only)

 Should you encounter any problem, please contact me at eoriol@naradarobotics.com
 or in person at my workplace


## ReactNative103 app

### With Git

Follow these simple instructions:

```
  > git clone https://github.com/kaikcreator/ReactNative103.git
  > cd ReactNative103
  > npm install
```

#### Running on Android Emulator
Running the app for android platform is avaiable for all OS, so we'll focus on that.
First, you must open AVD Manager via the Android Studio IDE by clicking the
AVD Manager icon ![AVD Manager icon][AVDManagerIcon]

This opens the Android Virtual Device Manager console, where you can create new
virtual devices (run by android emulator in the computer) and run those instances.
If you have not created a virtual device on the installation process, do
that now.

Once you have a Virtual Device instance created, click on the play icon to run it,
you'll see a window appearing with the device depicted on it.

![AVD Manager Console][AVDManagerConsole]

Leave it on and go back to the terminal.

```
  > react-native run-android
```

This should trigger all the processes to run the app on the virtual environment,
provided the emulator is still running.

**Note**: be sure that you don't have any android device plugged in.

[AVDManagerIcon]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/avdmanager_icon.png
[AVDManagerConsole]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/avdmanager_console.png

Alternatively to the Android Emulator, you can donwload and install Genymotion,
which is a bit better than the out-of-the box android emulator from avd manager.

### Running on iOS Simulator

I order to run a react native app in iOS device or simulator, you'll need XCode,
which is only available on MacOX platform.

Once XCode is properly installed, open the .xcodeproj file located on ios folder

```
  > cd ReactNative103/ios
  > open ReactNative103.xcodeproj
```

Once the XCode is open, just target it to the simulator (for example, iPhone6),
and click play button ![XCode Run Icon][XCodeRunIcon] to run the app. It'll open
the simulator and start the app

![Xcode Target Simulator][XCodeTargetSimulator]

[XCodeRunIcon]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/runios_icon.png
[XCodeTargetSimulator]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/xcode_target.png


### Running on Android Device

Running on an actual device takes basically the same process as on the emulator,
but note that there should be no emulator instance running (not only the app,
but the actual emulator)

Then, open your terminal and type

```
  $(ReactNative103)> react-native run-android
```

When you run app for the first time, a red screen will appear, stating that it
is unable to reach the development server

<img src="https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_error.png" width="40%">

This is because, by default, the app is trying to reach the development server
at http://localhost:8081. Since the app is not running locally we must point to
the ip of our local machine.

**Note**: To be able to reach your local development server from the device, both
must be in the same network, so they can __see__ each other. Hence, you must
connect the device to the same WiFi network as your computer.

To change the IP address the native app is pointing to, press the physical menu
button, or just shake the device. It'll bring up the popup menu. Choose DevSettings

<img src="https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_error_popupmenu.png" width="40%">

Then, select Debug server host & port for device

<img src="https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_devsettings.png" width="40%">

You'll need to provide the ip address and port of the local machine where you
have the npm start running. The default port is 8081.

<img src="https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_port_filled.png" width="40%">

And voilà! You should get the app up and running.


[DeviceErrorPopupMenu]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_error_popupmenu.png
[DeviceDevSettings]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_devsettings.png
[DevicePortEmpty]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_port_empty.png
[DevicePortFilled]: https://raw.githubusercontent.com/kaikcreator/ReactNative103/master/README_resources/device_port_filled.png


### Running on iOS Device

Running a React Native app in iOS is very similar to running any native iOS app.
You must have the proper developer license (enrolling on which costs about 99$/year),
and have the proper certificates installed. We'll not cover this, as it is the
same process for any other native app.

What you'll need to change though, is the dev server to which the app will point,
for the same reason as for the android devices. Here, though, you must change a
line of code. Go to AppDelegate.m and change

```
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
to
jsCodeLocation = [NSURL URLWithString:@"http://[IP_ADDRESS_LOCAL_MACHINE]:8081/index.ios.bundle?platform=ios&dev=true"];
```

Where [IP_ADDRESS_LOCAL_MACHINE] is the ip address of your local machine
(e.g.: 10.0.1.104). Leave the port as 8081

## TroubleShooting

If the app refuses to run, try and close the terminal where the development
server is running. You should notice then that another terminal opens as you
run ```react-native run-android```. Sometimes the development server can
hang, or maybe is pointing to a different app if you started a new one.
