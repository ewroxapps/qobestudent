import { LogBox } from 'react-native';
import './TextConfig';
import DebugConfig from './DebugConfig';

if (__DEV__ && DebugConfig.ignoreLogBox) {
  // If ReactNative's yellow log box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  // LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
  LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
}
