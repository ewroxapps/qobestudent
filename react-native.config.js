module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null // disable Android platform, other platforms will still autolink if provided
      }
    }
  },
  assets: ['./App/Assets/Fonts', './App/Images/']
};
