import { PermissionsAndroid, ToastAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
export const downloadFile = async (url: string, fileName: string) => {
  try {
    // Check if the app already has the WRITE_EXTERNAL_STORAGE permission
    let permissionResult = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );

    if (!permissionResult) {
      console.log('COME');
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs storage permission to download files.',
          buttonPositive: 'OK', 
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
      } else {
        console.log('Storage permission denied');
        return;
      }
    }else{
      ToastAndroid.showWithGravity('Download started...', ToastAndroid.SHORT, ToastAndroid.CENTER);

      const options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`,
          title: 'Downloading File',
        },

        
        
      };

      RNFetchBlob.config(options)
        .fetch('GET', url, {})
        .then(res => {
          console.log('Response Status Code:', res.respInfo.status);
          ToastAndroid.showWithGravity('Download completed!', ToastAndroid.SHORT, ToastAndroid.CENTER);
        })
        .catch(err => {
          console.log(err.toString());
          ToastAndroid.showWithGravity('Unable to download', ToastAndroid.SHORT, ToastAndroid.CENTER);
        });
    }


  } catch (err) {
    console.warn('Permission check error:', err);
  }
};
