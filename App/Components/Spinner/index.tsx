import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Colors } from '../../Themes';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size="large" color={Colors.primary} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
