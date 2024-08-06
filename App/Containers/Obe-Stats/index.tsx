import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native';
import { Screen } from '../../Components';
import styles from './styles';

const ObeStats = () => {
  return (
    <Screen>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <Text>Screen is under construction.</Text>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default ObeStats;
