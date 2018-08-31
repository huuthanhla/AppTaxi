# AppTaxi

## Install redux
```
npm install react-redux redux redux-thunk react-native-router-flux react-addons-update --save

npm install redux-logger --save-dev
```

## Adding GoogleMaps
add module
```
npm install react-native-maps --save

npm install react-native-google-maps --save
```

Podfile
```
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  'Core',
  'CxxBridge', # Include this for RN >= 0.47
  'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket', # needed for debugging
  # Add any other subspecs you want to use in your project
  'RCTAnimation',
  'RCTActionSheet',
  'RCTBlob',
  'RCTGeolocation',
  'RCTImage',
  # 'RCTLinking',
  'RCTSettings',
  'RCTText',
  'RCTVibration',
]
# Explicitly include Yoga if you are using RN >= 0.42.0
pod "yoga", :path => "../node_modules/react-native/ReactCommon/yoga"
# pod 'react-native-sqlite-storage', :path => '../node_modules/react-native-sqlite-storage'

# Third party deps podspec link
pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

# pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'

# react-native-maps dependencies
pod 'react-native-maps', path: '../node_modules/react-native-maps'
pod 'react-native-google-maps', path: '../node_modules/react-native-maps'  # Remove this line if you don't want to support GoogleMaps on iOS
pod 'GoogleMaps'  # Remove this line if you don't want to support GoogleMaps on iOS
pod 'Google-Maps-iOS-Utils' # Remove this line if you don't want to support GoogleMaps on iOS

```


## Integration
Replace ios start project as Swift
[http://facebook.github.io/react-native/docs/integration-with-existing-apps](http://facebook.github.io/react-native/docs/integration-with-existing-apps)