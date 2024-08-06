import { SafeAreaView } from 'react-native';
import styles from './styles';

const Screen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>{props?.children}</SafeAreaView>
  );
};
export default Screen;
