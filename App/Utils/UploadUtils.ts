import { getI18n } from 'react-i18next';
import { Alert, PermissionsAndroid } from 'react-native';

export const checkUploadPermission = async () => {
  try {
    let permissionResult = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    let granted;
    if (!permissionResult) {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
    }

    if (permissionResult || granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      Alert.alert(
        getI18n().t('common:uploadPermissionDenied'),
        getI18n().t('common:readPermissionInstructions')
      );
    }
    return false;
  } catch (err) {
    console.warn(err);
    return false;
  }
};
