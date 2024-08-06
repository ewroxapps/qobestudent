import { Image, View } from 'react-native';
import images from '../../../Themes/Images';

const PoweredBy = () => {
  return (
    <View>
      <Image source={images.creatorLogo} />
    </View>
  );
};

export default PoweredBy;
